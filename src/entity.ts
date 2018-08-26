import { Is } from "./utils/is";

/**
 * ### @Artic / Entity
 * 
 * Representation of the an entity
 * in Artic.
 */
 export class Entity {

    /**
     * ### @Artic / Entity / ID
     * 
     * The key identifier for the record
     * @type {string}
     */
    public id: string;


    /**
     * ### @Artic / Entity / Created
     * 
     * The Date the record was commited
     * to persistance
     */
    public created: Date;


    /**
     * ### @Artic / Entity / Updated
     * 
     * The Date the record was last 
     * commited to persistance
     */
    public updated: Date;


    /**
     * ### @Artic / Entity / Make
     * 
     * Creates an new instance of the entity, and if 
     * properties are provided, they will populate
     * the instance.
     * @param properties 
     */
    static oMake<Context extends Entity>(this: new() => Context, properties?: object) {
        let instance = new this;
        if(Is.obj(properties)) {
            for(let iterator in properties) {
                instance[iterator] = properties[iterator];
            }
        }
        return instance;
    }

    static oAll() {}
    static oFind() {}
}
