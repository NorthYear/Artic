/// <reference types="node" />
import { DatabaseInstance } from "./database.instance";
import { DatabaseParallelInstance } from "./database.parallel.instance";
import { EventEmitter } from "events";
import { DatabaseStore } from "./database.store";
/**
 * ### @Artic / Entity
 *
 * Representation of the an entity
 * in Artic.
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
     * ### @Artic / Entity / oMake
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
     * Subscribe to events as it pertains to
     * a particular database instance
     * @param database
     */
    static vEvents(database: DatabaseInstance | DatabaseParallelInstance): EventEmitter;
    /**
     * ### @Artic / Entity / vAll
     *
     * Get all records from a database instance
     * under an entities namespace
     *
     * @param this
     * @param database
     */
    static vAll<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance): Promise<Context[]>;
    static vCount(database: DatabaseInstance | DatabaseParallelInstance): Promise<number>;
    static vHas(database: DatabaseInstance | DatabaseParallelInstance, id: string): Promise<boolean>;
    /**
     *
     * @param database
     * @param handler
     */
    static vStream<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, handler: (instance: Context, abort: Function) => void): Promise<void>;
    static vCopyAll(fromDatabase: DatabaseInstance, toDatabase: DatabaseInstance, progressHandler?: (percent: number) => void): Promise<void>;
    static vEmpty(database: DatabaseInstance | DatabaseParallelInstance): Promise<void>;
    static vClose(database: DatabaseInstance | DatabaseParallelInstance): Promise<void>;
    static vSaveMany<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, instances: Context[]): Promise<Context[]>;
    static vFind<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, id: string): Promise<Context>;
    static vFindMany<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, ids: string[]): Promise<Context[]>;
    static vRemoveMany<Context extends Entity>(this: new () => Context, database: DatabaseInstance | DatabaseParallelInstance, ids: string[]): Promise<void>;
    static vStore(name: string): DatabaseStore;
    /**
     * ### @Artic / Entity / vSave
     *
     * Saves the current record to persistance. If
     * the record previously existed, it will overwrite
     * the previous state.
     * @param database
     */
    vSave<Context extends Entity>(this: Context, database: DatabaseInstance | DatabaseParallelInstance): Promise<Context>;
    vRemove(database: DatabaseInstance | DatabaseParallelInstance): Promise<void>;
    vInject<Context extends Entity>(this: Context, ...handlers: ((instance: Context) => void)[]): Context;
    vJson(): string;
    vMap<Context, T>(this: Context, mapHandler: (instance: Context) => T): T;
    vMapJson<Context>(this: Context, handler: (instance: Context) => any): string;
    vEncrypt(key: string): string;
    vConsole(): void;
    vMapEncrypt<Context>(this: Context, key: string, handler: (instance: Context) => any): string;
}
