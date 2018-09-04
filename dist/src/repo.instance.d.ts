import { DatabaseInstance } from "./database.instance";
import { DatabaseParallelInstance } from "./database.parallel.instance";
export declare class RepoInstance<Context> {
    private list;
    private database?;
    private usingDatabase;
    private finalDatabase;
    constructor(list: Context[], database?: DatabaseInstance | DatabaseParallelInstance);
    array(): Context[];
    stringify(): string;
    parse(data: string): Context[];
    vMapJson<T>(handler: (item: Context) => T): string;
}
export declare function Repo<Context>(list?: Context[], database?: DatabaseInstance | DatabaseParallelInstance): RepoInstance<Context>;
