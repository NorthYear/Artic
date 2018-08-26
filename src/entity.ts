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
     * ### @Artic / Entity / oMake
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

    /**
     * ### @Artic / Entity / oSeed
     * 
     * For the number of times provided, creates an
     * instance of the entity and populates an array.
     * The populated array is retured. It does not 
     * automatically create records in a database.
     * 
     * @param count
     * @param handler
     */
    static oSeed<Context extends Entity>(
        this: new() => Context, 
        count: number, 
        handler: (instance: Context, index: number) => void
    ) {
        let repo: Context[] = [];
        for(var i = 0; i < count; i++) {
            let instance = new this;
            handler(instance, i);
            repo.push(instance);
        }
        return repo;
    }

    static oEvents() {}
    static oAll() {}
    static oStream() {}
    static oStreamChunk() {}
    static oCopyAll() {}
    static oEmpty() {}
    static oClose() {}
    static oSaveMany() {}
    static oFind() {}
    static oFindMany() {}
    static oRemoveMany() {}
    static oStore() {}
    static oCount() {}
    public oSave() {}
    public oRemove() {}
    public oInject() {}
    public oJson() {}
    public oMap() {}
    public oMapJson() {}
    public oEncrypt() {}
    public oConsole() {}
    public oMapEncrypt() {}
}
