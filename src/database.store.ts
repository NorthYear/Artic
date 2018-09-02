import { join } from 'path';

import { DatabaseInstance } from './database.instance';
import { DatabaseParallelInstance } from './database.parallel.instance';
import { Brander } from './utils/brander';

/**
 * ### @Artic / DatabaseStore
 * 
 * Represents a key-value store that
 * is appended to an ***Entity***
 */
export class DatabaseStore {

    /**
     * ### @Artic / DatabaseStore / Constructor
     * 
     * Create an instance of ***DatabaseStore*** with
     * a given ***Entity*** and name.
     * @param entity 
     * @param name 
     */
    public constructor(private entity: typeof Object | Function, private name: string) {}


     /**
     * ### @Artic / DatabaseStore / vHas
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will determine
     * if a record exists with a certain key under the 
     * current ***Entity***'s store.
     * 
     * @param database 
     * @param id 
     */
    public vHas(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string
    ) {
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let namespace = join(Brander.satisfyEntityName(finalDatabase, this.entity), this.name);
        let hashedKey = finalDatabase.tooling.hashKey(key);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.has(namespace, key)
        })
    }

    /**
     * ### @Artic / DatabaseStore / vSet
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, persists 
     * a key and value under the current 
     * ***Entity***'s store.
     *  
     * @param database 
     * @param instances 
     */
    public vSet(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string, 
        value: any
    ) {
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(
            databases.map(database => {
                let name = join(Brander.satisfyEntityName(database, this.entity), this.name);
                let namespace = database.tooling.hashNamespace(name);
                let hashedKey = database.tooling.hashKey(key);
                return database.adapter.open(namespace).then(() => {
                    return database.adapter.put(namespace, hashedKey, database.tooling.serialize(value)).then(() => {
                        database.eventStore.for(namespace).emit("saved", value);
                    })
                })
            })
        ).then(() => {})
    }

    /**
     * ### @Artic / DatabaseStore / vGet
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, gets a
     * particular record by key under the current
     * ***Entity***'s store.
     * 
     * @param database 
     * @param id 
     */
    public vGet<Context>(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string
    ) {
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let namespace = join(Brander.satisfyEntityName(finalDatabase, this.entity), this.name);
        let hashedKey = finalDatabase.tooling.hashKey(key);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.get(namespace, key).then(value => {
                return finalDatabase.tooling.unserialize<Context>(value)
            })
        })
    }

     /**
     * ### @Artic / Entity / vRemove
     * 
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, removes 
     * the record from the current ***Entity***'s
     * store.
     * 
     * @param database
     * @param key 
     */
    public vRemove<Context>(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string
    ) {
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(
            databases.map(database => {
                let name = join(Brander.satisfyEntityName(database, this.entity), this.name);
                let namespace = database.tooling.hashNamespace(name);
                let hashedKey = database.tooling.hashKey(key);
                return database.adapter.open(namespace).then(() => {
                    return database.adapter.remove(namespace, hashedKey).then(() => {
                        database.eventStore.for(namespace).emit("removed", key);
                    })
                })
            })
        ).then(() => {})
    }
}
