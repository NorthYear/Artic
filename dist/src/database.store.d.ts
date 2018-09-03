import { DatabaseInstance } from "./database.instance";
import { DatabaseParallelInstance } from "./database.parallel.instance";
export declare class DatabaseStore {
    private entity;
    private name;
    constructor(entity: typeof Object | Function, name: string);
    vHas(database: DatabaseInstance | DatabaseParallelInstance, key: string): Promise<boolean>;
    vSet(database: DatabaseInstance | DatabaseParallelInstance, key: string, value: any): Promise<void>;
    vGet<Context>(database: DatabaseInstance | DatabaseParallelInstance, key: string): Promise<Context>;
    vRemove<Context>(database: DatabaseInstance | DatabaseParallelInstance, key: string): Promise<void>;
}
