export interface AdapterInterface {
    open: (namespace: string) => Promise<void>
    close: (namespace: string) => Promise<void>
    count: (namespace: string) => Promise<number>
    has: (namespace: string, key: string) => Promise<boolean>
    put: (namespace: string, key: string, value: string) => Promise<boolean>
    putMany: (namespace: string, values: { key: string, value: string }[]) => Promise<boolean>;
    get: (namespace: string, key: string) => Promise<string>
    getMany: (namespace: string, keys: string[]) => Promise<string[]>
    remove: (namespace: string, key: string) => Promise<boolean>;
    removeMany: (namespace: string, keys: string[]) => Promise<boolean>;
    all: (namespace: string) => Promise<string[]>
    stream: (namespace: string, handler: (key: string, value: string, abort: Function) => void) => Promise<void>
    emptyNamespace: (namespace: string) => Promise<boolean> 
    empty: () => Promise<boolean>;
    query?: <QueryBuilder>(handler: (queryBuilder:QueryBuilder) => void) => Promise<string[]>
}