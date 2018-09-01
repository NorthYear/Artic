import { Database, Entity } from "../src/index";
import { DevAdapter } from "../src/adapters/dev.adapter";

export class Article extends Entity {
    public title: string;
    public content: string;
}

const context = {
    Article
}

let mainAdapter = new DevAdapter();
mainAdapter.quiet = true;

let backupAdapter = new DevAdapter();
backupAdapter.quiet = true;

let copyAdapter = new DevAdapter();
copyAdapter.quiet = true;

export const mainDB = Database.vMake("main", {
    adapter: mainAdapter,
    encryptionKey: process.env.ENCRYPTION_KEY,
    context
})

export const backupDB = Database.vMake("backup", {
    adapter: backupAdapter,
    encryptionKey: null,
    context
})

export const copyDB = Database.vMake("copy.db", {
    adapter: copyAdapter,
    encryptionKey: null,
    context
})

export const allDB = Database.vParallel(mainDB, backupDB);
