/// <reference types="node" />
import { EventEmitter } from 'events';
import { DatabaseInstance } from './database.instance';
import { DatabaseParallelInstance } from './database.parallel.instance';
import { DatabaseStore } from './database.store';
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
export declare class Entity {
    /**
     * ### @Artic / Entity / vEntityName
     *
     * Overrides the entity name on persistance
     * @type {string}
     */
    static vEntityName: string;
    /**
     * ### @Artic / Entity / ID
     *
     * The key identifier for the record
     * @type {string}
     */
    id: string;
    /**
     * ### @Artic / Entity / Created
     *
     * The Date the record was commited
     * to persistance
     * @type {Date}
     */
    created: Date;
    /**
     * ### @Artic / Entity / Updated
     *
     * The Date the record was last
     * commited to persistance
     * @type {Date}
     */
    updated: Date;
    /**
     * ### @Artic / Entity / vNew
     *
     * Creates an new instance of the entity, and if
     * properties are provided, they will populate
     * the instance.
     * @param properties
     */
    static vNew<Context extends Entity>(this: new () => Context, properties?: object): Context;
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
    static vSeed<Context extends Entity>(this: new () => Context, count: number, handler: (instance: Context, index: number) => void): Context[];
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
    static vEvents(database: DatabaseInstance | DatabaseParallelInstance): EventEmitter;
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
    static vAll<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance): Promise<Context[]>;
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
    static vCount(database: DatabaseInstance | DatabaseParallelInstance): Promise<number>;
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
    static vHas(database: DatabaseInstance | DatabaseParallelInstance, id: string): Promise<boolean>;
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
    static vStream<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, handler: (instance: Context, abort: Function) => void): Promise<void>;
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
    static vCopyAll(fromDatabase: DatabaseInstance, toDatabase: DatabaseInstance, progressHandler?: (percent: number) => void): Promise<void>;
    /**
     * ### @Artic / Entity / vEmpty
     *
     * Empties all records under an ***Entity***'s
     * namespace in an particular ***DatabaseInstance***
     * or ***DatabaseParallelInstance***
     *
     * @param database
     */
    static vEmpty(database: DatabaseInstance | DatabaseParallelInstance): Promise<void>;
    /**
     * ### @Artic / Entity / vClose
     *
     * Closes a ***DatabaseInstance***'s or a
     * ***DatabaseParallelInstance***'s adapter connection to
     * the current ***Entity***'s namespace.
     *
     * @param database
     */
    static vClose(database: DatabaseInstance | DatabaseParallelInstance): Promise<void>;
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
    static vSaveMany<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, instances: Context[]): Promise<Context[]>;
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
    static vFind<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, id: string): Promise<Context>;
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
    static vFindMany<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, ids: string[]): Promise<Context[]>;
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
    static vRemoveMany<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, ids: string[]): Promise<void>;
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
    static vStore(name: string): DatabaseStore;
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
    vSave<Context extends Entity>(this: Context, database: DatabaseInstance | DatabaseParallelInstance): Promise<Context>;
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
    vRemove(database: DatabaseInstance | DatabaseParallelInstance): Promise<void>;
    /**
     * ### @Artic / Entity / vInject
     *
     * Injects the current instance into
     * any number of handlers provided as
     * a dependency.
     *
     * @param handlers
     */
    vInject<Context extends Entity>(this: Context, ...handlers: ((instance: Context) => void)[]): Context;
    /**
     * ### @Artic / Entity / vJson
     *
     * Returns a JSON version of the
     * current instance.
     */
    vJson(): string;
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
    vMap<Context, T>(this: Context, mapHandler: (instance: Context) => T): T;
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
    vMapJson<Context>(this: Context, handler: (instance: Context) => any): string;
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
    vEncrypt(key: string): string;
    /**
     * ### @Artic / Entity / vConsole
     *
     * ***console.log***'s the current instance
     * with color highlighting.
     */
    vConsole(): void;
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
    vMapEncrypt<Context>(this: Context, key: string, handler: (instance: Context) => any): string;
}
