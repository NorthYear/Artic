import { DatabaseInstance } from './database.instance';
import { DatabaseParallelInstance } from './database.parallel.instance';
/**
 * ### @Artic / DatabaseStore
 *
 * Represents a key-value store that
 * is appended to an ***Entity***
 */
export declare class DatabaseStore {
    private entity;
    private name;
    /**
     * ### @Artic / DatabaseStore / Constructor
     *
     * Create an instance of ***DatabaseStore*** with
     * a given ***Entity*** and name.
     * @param entity
     * @param name
     */
    constructor(entity: typeof Object | Function, name: string);
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
    vHas(database: DatabaseInstance | DatabaseParallelInstance, key: string): Promise<boolean>;
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
    vSet(database: DatabaseInstance | DatabaseParallelInstance, key: string, value: any): Promise<void>;
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
    vGet<Context>(database: DatabaseInstance | DatabaseParallelInstance, key: string): Promise<Context>;
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
    vRemove<Context>(database: DatabaseInstance | DatabaseParallelInstance, key: string): Promise<void>;
}
