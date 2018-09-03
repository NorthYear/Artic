import { AdapterInterface } from "../interfaces/adapter.interface";
/**
 * ### @Artic / Adapters / DevAdapter
 *
 * In memory store to allow the developer to
 * start working on the app without having current
 * working persistant layer. It console.logs data
 * as it would be written to persistance, though it
 * can be set to quiet mode.
 */
export declare class DevAdapter implements AdapterInterface {
    /**
     * ### @Artic / Adapters / DevAdapter / Store
     *
     * The storage location for all in memory data
     */
    store: {};
    /**
     * ### @Artic / Adapters / DevAdapter / Quiet
     *
     * Whether or not the data should be consoled.
     */
    quiet: boolean;
    /**
     * ### @Artic / Adapters / DevAdapter / Open
     *
     * Resolves void. Since in memory, this is only
     * satisfy the interface.
     */
    open(): Promise<void>;
    /**
     * ### @Artic / Adapters / DevAdapter / Count
     *
     * Count the number of records in a namespace
     * @param namespace
     */
    count(namespace: string): Promise<number>;
    /**
     * ### @Artic / Adapters / DevAdapter / Close
     *
     * Resolves void. Since in memory, this only
     * satisfies the interface.
     */
    close(): Promise<void>;
    /**
     * ### @Artic / Adapters / DevAdapter / Has
     *
     * Determines if a namespace has a particular
     * key in memory
     *
     * @param namespace
     * @param key
     */
    has(namespace: string, key: string): Promise<boolean>;
    /**
     * ### @Artic / Adapters / DevAdapter / Empty
     *
     * Empty the entire store
     */
    empty(): Promise<void>;
    /**
     * ### @Artic / Adapters / DevAdapter / Empty Namespace
     *
     * Empty all records associated with a namespace
     * @param namespace
     */
    emptyNamespace(namespace: string): Promise<void>;
    /**
     * Helper method to ensure
     * that a namespace exists
     * @param namespace
     */
    private ensure;
    /**
     * Helper method to send record information
     * to the console for viewing
     * @param key
     * @param value
     */
    logRecord(key: string, value: string): void;
    /**
     * Helper method to the namespace and
     * action to the console for viewing
     *
     * @param namespace
     * @param action
     */
    logAction(namespace: any, action: string): void;
    /**
     * ### @Artic / Adapters / DevAdapter / Put
     *
     * Put a record in storage
     * @param namespace
     * @param key
     * @param value
     */
    put(namespace: string, key: string, value: string): Promise<void>;
    /**
     * ### @Artic / Adapters / DevAdapter / PutMany
     *
     * Put many records in storage
     * @param namespace
     * @param values
     */
    putMany(namespace: string, values: {
        key: string;
        value: string;
    }[]): Promise<void>;
    /**
     * ### @Artic / Adapters / DevAdapter / Remove
     *
     * Remove a record from storage
     *
     * @param namespace
     * @param key
     */
    remove(namespace: any, key: string): Promise<void>;
    /**
     * ### @Artic / Adapters / DevAdapter / RemoveMany
     *
     * Remove many records from storage
     * @param namespace
     * @param keys
     */
    removeMany(namespace: any, keys: string[]): Promise<void>;
    /**
     * ### @Artic / Adapters / DevAdapter / Get
     *
     * Get a single record from storage
     * @param namespace
     * @param key
     */
    get(namespace: string, key: string): Promise<string>;
    /**
     * ### @Artic / Adapters / DevAdapter / GetMany
     *
     * Get many records from storage
     * @param namespace
     * @param keys
     */
    getMany(namespace: string, keys: string[]): Promise<string[]>;
    /**
     * ### @Artic / Adapters / DevAdapter
     *
     * Get all records from storage in a
     * namespace
     * @param namespace
     */
    all(namespace: string): Promise<string[]>;
    /**
     * ### @Artic / Adapters / DevAdapter / Stream
     *
     * Stream records from storage in a particular
     * namespace
     * @param namespace
     * @param handler
     */
    stream(namespace: string, handler: (key: string, value: string, abort: Function) => void): Promise<void>;
}
