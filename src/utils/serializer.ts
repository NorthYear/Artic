import { Exceptions } from "./exceptions";

export interface SerializerAllocations {
    [key: string]: new () => any
}

/**
 * ### @Artic / Utils / Serializer
 * 
 * It's a library for dealing with JSON
 * when you want to remember state of the
 * instance or list of instances being 
 * stringified and parsed
 */
export class Serializer {

    /**
     * ### @Artic / Utils / Serializer / Constructor
     * 
     * Pass in a hash table of constructors to remember.
     * It's not required that an instance be an child of 
     * Entity. This makes it nice for sub-instances.
     *
     * @constructor
     * @param constructors 
     * @param name 
     */
    constructor(private constructors: SerializerAllocations, name: string) {
        for (var iterator in constructors) {
            if (typeof constructors[iterator] === "function") {
                constructors[iterator]["#artic-instance-type"] = iterator;
            } else {
                Exceptions.articWarning(
                    `Failed to install context in the serializer for [${name}].`,
                    `  "${iterator}" cannot be type of "${typeof constructors[iterator]}".`
                )
            }
        }
    }

    /**
     * ### @Artic / Utils / Serializer / Contextify
     * 
     * Loop through all instances and arrays of instances
     * and attach a signature to remember them.
     * @param obj 
     */
    private contextify(obj: any) {
        if (Array.isArray(obj)) {
            obj.forEach(item => this.contextify(item));
        } else if (typeof obj === "object" && obj !== null) {
            for (var iterator in obj) {
                this.contextify(obj[iterator]);
            }
            if (this.constructors[obj.constructor["#artic-instance-type"]]) {
                if (obj.constructor.name !== "Date") {
                    obj["#artic-instance-type"] = obj.constructor["#artic-instance-type"];
                }
            }
        }
    }

    /**
     * ### @Artic / Utils / Serializer / Uncontextify
     * 
     * Loop through instance or an array of instances
     * and remove the signatures
     * @param obj 
     */
    private uncontextify(obj: any) {
        if (Array.isArray(obj)) {
            obj.forEach(item => this.uncontextify(item));
        } else if (typeof obj === "object" && obj !== null) {
            for (var iterator in obj) {
                this.uncontextify(obj[iterator]);
            }
            if (this.constructors[obj.constructor["#artic-instance-type"]]) {
                if (obj.constructor.name !== "Date") {
                    delete obj["#artic-instance-type"]
                }
            }
        }
    }

    /**
     * ### @Artic / Utils / Serializer / Stringify
     * 
     * Add signature and stringify a snapshot
     * then remove the signatures so there no
     * extra properties in an instance just
     * serialized. Return the JSON snapshot.
     * 
     * @param obj 
     */
    public stringify(obj: any) {
        this.contextify(obj);
        let data = JSON.stringify(obj);
        this.uncontextify(obj);
        return data;
    }

    /**
     * ### @Artic / Utils / Serializer / Parse
     * 
     * JSON.parse with reviver to spin up 
     * data in the proper context previously
     * provided.
     * 
     * @param str 
     */
    public parse<Context extends any>(str: string): Context {
        return JSON.parse(str, (key, value) => {
            if (this.constructors["Date"]) {
                var a;
                if (typeof value === 'string') {
                    a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
            }
            if (typeof value === "object" && value !== null && value !== undefined) {
                if (typeof value["#artic-instance-type"] === "string") {
                    if (typeof this.constructors[value["#artic-instance-type"]] === "function") {
                        var context = new this.constructors[value["#artic-instance-type"]];
                        delete context["#artic-instance-type"];
                        for (var iterator in value) {
                            if (iterator !== "#artic-instance-type") {
                                context[iterator] = value[iterator];
                            }
                        }
                        return context;
                    } else {
                        Exceptions.articError(
                            `Could not use context => ${typeof value["#artic-instance-type"]}. It is not a constructor.`,
                            `   type: ${typeof this.constructors[value["#artic-instance-type"]]}`
                        )
                    }
                }
            }
            return value;
        })
    }


}
