import { Is } from "./utils/is";
import { DatabaseInstance } from "./database.instance";
import { DatabaseParallelInstance } from "./database.parallel.instance";
import { EventEmitter } from "events";
import { Brander } from "./utils/brander";
import uniqid = require("uniqid");
import { Exceptions } from "./utils/exceptions";
import { Validations } from "./utils/validations";
import { Cryptobox } from "./utils/cryptobox";
import { DatabaseStore } from "./database.store";
import { join } from "path";

/**
 * ### @Artic / Entity
 * 
 * Representation of the an entity
 * in Artic.
 */
export class Entity {

    /**
     * ### @Artic / Entity / vEntityName
     * 
     * Overrides the entity name on persistance
     * @type {string}
     */
    public static vEntityName: string;

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
     * @type {Date}
     */
    public created: Date;


    /**
     * ### @Artic / Entity / Updated
     * 
     * The Date the record was last 
     * commited to persistance
     * @type {Date}
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
    static vNew<Context extends Entity>(this: new () => Context, properties?: object) {
        let instance = new this;
        if (Is.obj(properties)) {
            for (let iterator in properties) {
                instance[iterator] = properties[iterator];
            }
        }
        return instance;
    }

    /**
     * ### @Artic / Entity / vSeed
     * 
     * For the number of times provided, creates an
     * instance of the entity and populates an array.
     * The populated array is retured. It does not 
     * automatically create records in a database.
     * 
     * @param count
     * @param handler
     */
    static vSeed<Context extends Entity>(
        this: new () => Context,
        count: number,
        handler: (instance: Context, index: number) => void
    ) {
        let repo: Context[] = [];
        for (var i = 0; i < count; i++) {
            let instance = new this;
            handler(instance, i);
            repo.push(instance);
        }
        return repo;
    }

    /**
     * ### @Artic / Entity / vEvents
     * 
     * Subscribe to events as it pertains to
     * a particular database instance
     * @param database 
     */
    public static vEvents(database: DatabaseInstance | DatabaseParallelInstance): EventEmitter {
        Validations.ensureDatabaseLike(database, this, "vEvents(<<db-instance>>)");
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return database.eventStore.for(namespace);
    }

    /**
     * ### @Artic / Entity / vAll
     * 
     * Get all records from a database instance
     * under an entities namespace
     * 
     * @param this 
     * @param database 
     */
    public static vAll<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance
    ): Promise<Context[]> {
        Validations.ensureDatabaseLike(database, this, "vAll(<<db-instance>>);");
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.all(namespace).then(values => {
                return values.map(v => finalDatabase.tooling.unserialize<Context>(v))
            })
        })
    }

    public static vCount(database: DatabaseInstance | DatabaseParallelInstance): Promise<number> {
        Validations.ensureDatabaseLike(database, this, "vCount(<<db-instance>>)"); 
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.count(namespace)
        })
    }

    public static vHas(database: DatabaseInstance | DatabaseParallelInstance, id: string): Promise<boolean> {
        Validations.ensureDatabaseLike(database, this, "vHas( ==> db <==, id: string)"); 
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        let key = finalDatabase.tooling.hashKey(id);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.has(namespace, key);
        })
    }

    /**
     * 
     * @param database 
     * @param handler 
     */
    public static vStream<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        handler: (instance: Context, abort: Function) => void
    ) {
        Validations.ensureDatabaseLike(database, this, "vStream(<<db-instance>>, streamHandler)");
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.stream(namespace, (key, value, abort) => {
                handler(finalDatabase.tooling.unserialize<Context>(value), () => abort());
            })
        })
    }

    public static vCopyAll(
        fromDatabase: DatabaseInstance,
        toDatabase: DatabaseInstance,
        progressHandler?: (percent: number) => void
    ) {
        Validations.ensureDatabase(fromDatabase, this, "vCopyAll(<<db-instance>>, toDatabase)");
        Validations.ensureDatabase(toDatabase, this, "vCopyAll(fromDatabase, <<db-instance>>)");
        let fromName = Brander.satisfyEntityName(fromDatabase, this);
        let toName = Brander.satisfyEntityName(toDatabase, this);
        let fromNamespace = fromDatabase.tooling.hashNamespace(fromName);
        let toNamespace = toDatabase.tooling.hashNamespace(toName);
        return Promise.all([
            fromDatabase.adapter.open(fromNamespace),
            toDatabase.adapter.open(toNamespace)
        ]).then(() => {
            return fromDatabase.adapter.count(fromNamespace).then(count => {
                let accountedFor: number = 0
                return fromDatabase.adapter.stream(fromNamespace, (key, value, abort) => {
                    let data = fromDatabase.tooling.unserialize(value);
                    let hashedKey = toDatabase.tooling.hashKey(key);
                    let dataString = toDatabase.tooling.serialize(data);
                    toDatabase.adapter.put(toNamespace, hashedKey, dataString).then(() => {
                        accountedFor++;
                        Is.fn(progressHandler) ? progressHandler((accountedFor / count) * 100) : null;
                    })
                })
            })
        })
    }

    public static vEmpty(database: DatabaseInstance | DatabaseParallelInstance) {
        Validations.ensureDatabaseLike(database, this, "vEmpty(<<db-instance>>)")
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.emptyNamespace(namespace);
    }

    public static vClose(database: DatabaseInstance | DatabaseParallelInstance): Promise<void> {
        Validations.ensureDatabaseLike(database, this, "vClose(<<db-instance>>)")
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances()
        return Promise.all(
            databases.map(database => {
                let realName = Brander.satisfyEntityName(database, this);
                let namespace = database.tooling.hashNamespace(realName);
                return database.adapter.close(namespace);
            })
        ).then(() => {
            return;
        })
    }
    
    public static vSaveMany<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        instances: Context[],
    ) {
        Validations.ensureDatabaseLike(database, this, "vSaveMany(<<db-instance>>, instances)")
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        instances.forEach(instance => {
            if (!Is.str(instance.id)) {
                instance.id = uniqid();
                instance.created = new Date;
                instance.updated = new Date;
            } else {
                instance.updated = new Date;
            }
        })
        return Promise.all(
            databases.map(database => {
                let realName = Brander.satisfyEntityName(database, this);
                let namespace = database.tooling.hashNamespace(realName);
                return database.adapter.open(namespace).then(() => {
                    let entries = instances.map(instance => {
                        return {
                            key: database.tooling.hashKey(instance.id),
                            value: database.tooling.serialize(instance)
                        }
                    })
                    return database.adapter.putMany(namespace, entries)
                })
            })
        ).then(booleans => {
           return instances;
        })
    }

    public static vFind<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        id: string
    ): Promise<Context> {
        Validations.ensureDatabaseLike(database, this, "vFind(<<db-instance>>, id)")
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        let key = finalDatabase.tooling.hashKey(id);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.get(namespace, key).then((value) => {
                return finalDatabase.tooling.unserialize<Context>(value)
            })
        });
    }


    public static vFindMany<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        ids: string[]
    ): Promise<Context[]> {
        Validations.ensureDatabaseLike(database, this, "vFindMany(==> db <==, ids:string[])")
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        let keys = ids.map(id => finalDatabase.tooling.hashKey(id));
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.getMany(namespace, keys).then((values) => {
                return values.map(value => {
                    return finalDatabase.tooling.unserialize<Context>(value)
                })
            })
        });
    }

    public static vRemoveMany<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        ids: string[]
    ) {
        Validations.ensureDatabaseLike(database, this, "vRemoveMany(==> db <==, ids:string[])")
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(
            databases.map(database => {
                let realName = Brander.satisfyEntityName(database, this);
                let namespace = database.tooling.hashNamespace(realName);
                let keys = ids.map(id => database.tooling.hashKey(id));
                return database.adapter.open(namespace).then(() => {
                    return database.adapter.removeMany(namespace, keys)
                })
            })
        ).then(() => {})
    }

    public static vStore(name: string) { 
        return new DatabaseStore(this, name);
    }

    /**
     * ### @Artic / Entity / vSave
     * 
     * Saves the current record to persistance. If
     * the record previously existed, it will overwrite
     * the previous state.
     * @param database 
     */
    public vSave<Context extends Entity>(this: Context, database: DatabaseInstance | DatabaseParallelInstance): Promise<Context> {
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        if (!Is.str(this.id)) {
            this.id = uniqid();
            this.created = new Date();
            this.updated = new Date();
        } else {
            this.updated = new Date();
        }
        return Promise.all(
            databases.map(database => {
                let realName = Brander.satisfyEntityName(database, this);
                let namespace = database.tooling.hashNamespace(realName);
                let key = database.tooling.hashKey(this.id);
                let value = database.tooling.serialize(this);
                return database.adapter.put(namespace, key, value)
            })
        ).then(() => {
            return this;
        })
    }
    
    public vRemove(database: DatabaseInstance | DatabaseParallelInstance) {
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        if(!Is.str(this.id)) {
            Exceptions.articError(
                `Can not remove "${Brander.getClassName(this)}" that does not exist`
             )
         }
        return Promise.all(
            databases.map(database => {
                let realName = Brander.satisfyEntityName(database, this);
                let namespace = database.tooling.hashNamespace(realName);
                let key = database.tooling.hashKey(this.id);
                return database.adapter.remove(namespace, key)
            })
        ).then(() => {})
    }

    public vInject<Context extends Entity>(this: Context, ...handlers: ((instance: Context) => void)[]) {
        handlers.forEach(handler => {
            handler(this)
        })
        return this;
    }


    public vJson() {
        return JSON.stringify(this);
    }

    public vMap<Context, T>(this: Context, mapHandler: (instance: Context) => T): T {
        return mapHandler(this);
    }

   
    public vMapJson<Context>(this: Context, handler: (instance: Context) => any): string {
        return JSON.stringify(handler(this));
    }

    public vEncrypt(key: string): string {
        return Cryptobox.encrypt(JSON.stringify(this), key);
    }


    public vConsole() {
        console.dir(this, {
            showHidden: false,
            depth: 4, 
            colors: true
        })
    }

    public vMapEncrypt<Context>(
        this: Context,
        key: string,
        handler: (instance: Context) => any
    ): string {
        return Cryptobox.encrypt(
            JSON.stringify(handler(this)),
            key
        );
    }
}
