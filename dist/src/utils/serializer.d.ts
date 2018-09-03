export interface SerializerAllocations {
    [key: string]: new () => any;
}
/**
 * ### @Artic / Utils / Serializer
 *
 * It's a library for dealing with JSON
 * when you want to remember state of the
 * instance or list of instances being
 * stringified and parsed
 */
export declare class Serializer {
    private constructors;
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
    constructor(constructors: SerializerAllocations, name: string);
    /**
     * ### @Artic / Utils / Serializer / Contextify
     *
     * Loop through all instances and arrays of instances
     * and attach a signature to remember them.
     * @param obj
     */
    private contextify;
    /**
     * ### @Artic / Utils / Serializer / Uncontextify
     *
     * Loop through instance or an array of instances
     * and remove the signatures
     * @param obj
     */
    private uncontextify;
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
    stringify(obj: any): string;
    /**
     * ### @Artic / Utils / Serializer / Parse
     *
     * JSON.parse with reviver to spin up
     * data in the proper context previously
     * provided.
     *
     * @param str
     */
    parse<Context extends any>(str: string): Context;
}
