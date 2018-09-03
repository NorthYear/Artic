import { Entity } from "../src/index";
export declare class Article extends Entity {
    title: string;
    content: string;
}
export declare const mainDB: import("../src/database.instance").DatabaseInstance;
export declare const backupDB: import("../src/database.instance").DatabaseInstance;
export declare const copyDB: import("../src/database.instance").DatabaseInstance;
export declare const allDB: import("../src/database.parallel.instance").DatabaseParallelInstance;
