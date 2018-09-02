import { EventEmitter } from 'events';

import { DatabaseInstance } from './database.instance';
import { DatabaseParallelInstance } from './database.parallel.instance';
import { DatabaseStore } from './database.store';
import { Brander } from './utils/brander';
import { Cryptobox } from './utils/cryptobox';
import { Exceptions } from './utils/exceptions';
import { Is } from './utils/is';
import { Validations } from './utils/validations';

import uniqid = require("uniqid");

/**
 * ### @Artic / Entity
 * 
 * Represents an ***Entity*** in Artic.
 * 
 * Entity is a definition of an concept that
 * contains properties that are persisted and
 * methods, that are extendable, to build out the 
 * model of an application.
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
     * ### @Artic / Entity / vNew
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
     * Returns the ***EventEmitter*** for the
     * current ***Entity*** that corresponds directly
     * to a database instance you provide.
     * 
     * If a ***DatabaseParallelInstance*** is provided, 
     * the first ***DatabaseInstance***'s ***EventEmitter***
     * will be returned.
     * 
     * @param database 
     */
    public static vEvents(database: DatabaseInstance | DatabaseParallelInstance): EventEmitter {
        Validations.ensureDatabaseLike(database, this, "vEvents( ==> db <== )");
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return database.eventStore.for(namespace);
    }

    /**
     * ### @Artic / Entity / vAll
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will return
     * a list of all records in the context of the
     * current ***Entity***
     * 
     * @param database 
     */
    public static vAll<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance
    ): Promise<Context[]> {
        Validations.ensureDatabaseLike(database, this, "vAll( ==> db <== )");
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.all(namespace).then(values => {
                return values.map(v => finalDatabase.tooling.unserialize<Context>(v))
            })
        })
    }

    /**
     * ### @Artic / Entity / vCount
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will count
     * the number of records that reside under the current
     * ***Entity***'s namespace.
     * 
     * @param database 
     */
    public static vCount(database: DatabaseInstance | DatabaseParallelInstance): Promise<number> {
        Validations.ensureDatabaseLike(database, this, "vCount( ==> db <== )"); 
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.count(namespace)
        })
    }


    /**
     * ### @Artic / Entity / vHas
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will determine
     * if a record exists with a certain id under the 
     * current ***Entity***'s namespace.
     * 
     * @param database 
     * @param id 
     */
    public static vHas(database: DatabaseInstance | DatabaseParallelInstance, id: string): Promise<boolean> {
        Validations.ensureDatabaseLike(database, this, "vHas( ==> db <== , id: string)"); 
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        let key = finalDatabase.tooling.hashKey(id);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.has(namespace, key);
        })
    }

    /**
     * ### @Artic / Entity / vStream
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will stream
     * all records under the current ***Entity***'s 
     * namespace in the current ***Entity***'s context
     * through a handler that you provide. 
     * 
     * In the handler, there will two arguments provided. The 
     * first will be the record in context. The second is an abort
     * function that maybe called at anytime to cease the
     * stream. When the stream is aborted or the stream has
     * completed, the returned promise will resolve.
     * 
     * @param database 
     * @param handler 
     */
    public static vStream<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        handler: (instance: Context, abort: Function) => void
    ) {
        Validations.ensureDatabaseLike(database, this, "vStream( ==> db-instance <==, streamHandler)");
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.stream(namespace, (key, value, abort) => {
                handler(finalDatabase.tooling.unserialize<Context>(value), () => abort());
            })
        })
    }

    /**
     * ### @Artic / Entity / vCopyAll
     * 
     * Copies an entire ***Entity***'s
     * namespace from one ***DatabaseInstance***
     * to another.
     * 
     * If you wish to monitor the progress during the
     * copying, a progress handler maybe supplied that
     * will be periodically called, suppling you with an 
     * ***Integer*** representing the percentage complete.
     * 
     * @param fromDatabase 
     * @param toDatabase 
     * @param progressHandler 
     */
    public static vCopyAll(
        fromDatabase: DatabaseInstance,
        toDatabase: DatabaseInstance,
        progressHandler?: (percent: number) => void
    ) {
        Validations.ensureDatabase(fromDatabase, this, "vCopyAll( ==> db <== , toDatabase)");
        Validations.ensureDatabase(toDatabase, this, "vCopyAll(fromDatabase, ==> db <==)");
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

    /**
     * ### @Artic / Entity / vEmpty
     * 
     * Empties all records under an ***Entity***'s 
     * namespace in an particular ***DatabaseInstance*** 
     * or ***DatabaseParallelInstance***
     * 
     * @param database 
     */
    public static vEmpty(database: DatabaseInstance | DatabaseParallelInstance) {
        Validations.ensureDatabaseLike(database, this, "vEmpty( ==> db <== )")
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let realName = Brander.satisfyEntityName(finalDatabase, this);
        let namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.emptyNamespace(namespace);
    }

    /**
     * ### @Artic / Entity / vClose
     * 
     * Closes a ***DatabaseInstance***'s or a 
     * ***DatabaseParallelInstance***'s adapter connection to 
     * the current ***Entity***'s namespace.
     * 
     * @param database 
     */
    public static vClose(database: DatabaseInstance | DatabaseParallelInstance): Promise<void> {
        Validations.ensureDatabaseLike(database, this, "vClose( ==> db <== )")
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
    
    /**
     * ### @Artic / Entity / vSaveMany
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, persists 
     * a list of instances of the current 
     * ***Entity***.
     *  
     * @param database 
     * @param instances 
     */
    public static vSaveMany<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        instances: Context[],
    ) {
        Validations.ensureDatabaseLike(database, this, "vSaveMany( ==> db <== , instances)")
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
                    return database.adapter.putMany(namespace, entries).then(() => {
                        let emitter = database.eventStore.for(namespace);
                        instances.forEach(instance => emitter.emit("saved", instance));
                    })
                })
            })
        ).then(() => {
           return instances;
        })
    }

    /**
     * ### @Artic / Entity / vFind
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, finds a
     * particular record by id under the current
     * ***Entity***'s namespace.
     * 
     * @param database 
     * @param id 
     */
    public static vFind<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        id: string
    ): Promise<Context> {
        Validations.ensureDatabaseLike(database, this, "vFind( ==> db <== , id)")
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


    /**
     * ### @Artic / Entity / vFindMany
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, finds many
     * records by a list of ids under a current
     * ***Entity***'s namespace.
     * 
     * @param database 
     * @param ids 
     */
    public static vFindMany<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        ids: string[]
    ): Promise<Context[]> {
        Validations.ensureDatabaseLike(database, this, "vFindMany( ==> db <== , ids:string[])")
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

    /**
     * ### @Artic / Entity / vRemoveMany
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, removes many
     * records by a list ids under the current
     * ***Entity***'s namespace.
     * 
     * @param database 
     * @param ids 
     */
    public static vRemoveMany<Context extends Entity>(
        this: new () => Context,
        database: DatabaseInstance | DatabaseParallelInstance,
        ids: string[]
    ) {
        Validations.ensureDatabaseLike(database, this, "vRemoveMany( ==> db <== , ids:string[])")
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(
            databases.map(database => {
                let realName = Brander.satisfyEntityName(database, this);
                let namespace = database.tooling.hashNamespace(realName);
                let keys = ids.map(id => database.tooling.hashKey(id));
                return database.adapter.open(namespace).then(() => {
                    return database.adapter.removeMany(namespace, keys).then(() => {
                        database.eventStore.for(namespace).emit("removed", ids);
                    })
                })
            })
        ).then(() => {})
    }

    /**
     * ### @Artic / Entity / vStore
     * 
     * Creates an instance of ***DatabaseStore***
     * and returns it futher persistance.
     * 
     * Creates a seperate key-value store; great 
     * for creating indexes or stashing extra data
     * that does not necessary fit in a normal
     * entity's scenario.
     * 
     * @param name 
     */
    public static vStore(name: string) { 
        return new DatabaseStore(this, name);
    }

    /**
     * ### @Artic / Entity / vSave
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, saves the current 
     * record to persistance. If the record previously 
     * existed, it will overwrite the previous record.
     * 
     * @param database 
     */
    public vSave<Context extends Entity>(this: Context, database: DatabaseInstance | DatabaseParallelInstance): Promise<Context> {
        Validations.ensureDatabaseLike(database, this, "vSave( ==> db <== )")
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
                return database.adapter.put(namespace, key, value).then(() => {
                    database.eventStore.for(namespace).emit("saved", this);
                })
            })
        ).then(() => {
            return this;
        })
    }
    
    /**
     * ### @Artic / Entity / vRemove
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, removes 
     * the record from the current ***Entity***'s
     * namespace.
     * 
     * @param database 
     */
    public vRemove(database: DatabaseInstance | DatabaseParallelInstance) {
        Validations.ensureDatabaseLike(database, this, "vRemove( ==> db <== )")
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
                return database.adapter.remove(namespace, key).then(() => {
                    database.eventStore.for(namespace).emit("removed", this.id);
                })
            })
        ).then(() => {})
    }

    /**
     * ### @Artic / Entity / vInject
     * 
     * Injects the current instance into
     * any number of handlers provided as
     * a dependency.
     * 
     * @param handlers 
     */
    public vInject<Context extends Entity>(this: Context, ...handlers: ((instance: Context) => void)[]) {
        handlers.forEach(handler => {
            handler(this)
        })
        return this;
    }

    /**
     * ### @Artic / Entity / vJson
     * 
     * Returns a JSON version of the
     * current instance. 
     */
    public vJson() {
        return JSON.stringify(this);
    }

    /**
     * ### @Artic / Entity / vMap
     * 
     * Similiar to ***Array.prototype.map***,
     * vMap passes the current instance to a 
     * map handler and returns the output of 
     * the handler.
     * 
     * Sometimes ***Entity***s have sensitive
     * information that does not necessary need
     * to be shared via an API. This provides a
     * way to create a function that handles creating
     * a safe rendition of the data wishing to be shared
     * 
     * @param mapHandler 
     */
    public vMap<Context, T>(this: Context, mapHandler: (instance: Context) => T): T {
        return mapHandler(this);
    }

   
    /**
     * ### @Artic / Entity / vMapJson
     * 
     * Similiar to ***Array.prototype.map***,
     * vMapJson passes the current instance to a 
     * map handler and returns the output of 
     * the handler as JSON.
     * 
     * @param handler 
     */
    public vMapJson<Context>(this: Context, handler: (instance: Context) => any): string {
        return JSON.stringify(handler(this));
    }

    /**
     * ### @Artic / Entity / vEncrypt
     * 
     * Returns an encrypted JSON version
     * of the current instance. It is encrypted
     * using AES-265-CBC with an initialization 
     * vector.
     * 
     * Format = [IV] : [EncryptedData]
     * @param key 
     */
    public vEncrypt(key: string): string {
        return Cryptobox.encrypt(JSON.stringify(this), key);
    }

    /**
     * ### @Artic / Entity / vConsole
     * 
     * ***console.log***'s the current instance
     * with color highlighting.
     */
    public vConsole() {
        console.dir(this, {
            showHidden: false,
            depth: 4, 
            colors: true
        })
    }

    /**
     * ### @Artic / Entity / vMapEncrypt
     * 
     * Similiar to ***Array.prototype.map***,
     * vMapEncrypt passes the current instance to a 
     * map handler and returns the output of 
     * the handler as JSON that is encrypted.
     * 
     * @param key 
     * @param handler 
     */
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
