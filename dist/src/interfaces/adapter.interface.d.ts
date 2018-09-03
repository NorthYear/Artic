export interface AdapterInterface {
    /**
     * ### @Artic / Interfaces / AdapterInterface
     *
     * Many databases need time to open a namespace
     * and have it connected. This handler will be called
     * before operation to ensure that the connection is
     * open and cached.
     */
    open: (namespace: string) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Method to close a namespace connection. It
     * will never be called by Artic directly. The
     * developer will manually execute this call
     */
    close: (namespace: string) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Count the number of records for a specific
     * namespace.
     */
    count: (namespace: string) => Promise<number>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Determine if a record exists under a namespace
     */
    has: (namespace: string, key: string) => Promise<boolean>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Put a record in persistance under a specific namespace
     */
    put: (namespace: string, key: string, value: string) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Put many records in persistance under a specific namespace
     */
    putMany: (namespace: string, values: {
        key: string;
        value: string;
    }[]) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Get a record from persistance under a specific namespace
     */
    get: (namespace: string, key: string) => Promise<string>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Get many records from persistance under a specific namespace
     */
    getMany: (namespace: string, keys: string[]) => Promise<string[]>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Remove a record from persistance under a specific namespace
     */
    remove: (namespace: string, key: string) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Remove many records from persistance under a specific namespace
     */
    removeMany: (namespace: string, keys: string[]) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Get all records from persistance under a specific namespace
     */
    all: (namespace: string) => Promise<string[]>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Stream all records from persistance under a specific namespace
     */
    stream: (namespace: string, handler: (key: string, value: string, abort: Function) => void) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Empty all records from persistance under a specific namespace
     */
    emptyNamespace: (namespace: string) => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * Empty all records in persistance under all namespaces
     */
    empty: () => Promise<void>;
    /**
     * ### @Artic / Interfaces/ AdapterInterface
     *
     * When a more detailed handling of querying is
     * necessary, query handler and builder may be
     * given to developer. Obviously, this done only
     * when data is not encrypted and encryption is
     * handled at a lower level the developer trusts.
     *
     * This is not a required method
     */
    query?: <QueryBuilder>(handler: (queryBuilder: QueryBuilder) => void) => Promise<string[]>;
}
