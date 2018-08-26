require('dotenv').config()
import { Database, Entity } from "../src/index";

export class Article extends Entity {
    public title: string;
    public content: string;
}

const context = {
    Article
}

export const mainDB = Database.oMake("main", {
    context
})

export const backupDB = Database.oMake("backup", {
    context
})

export const allDB = Database.oParallel(mainDB, backupDB);
