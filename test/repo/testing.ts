import { createRepoInstance } from "./createRepoInstance";
import { createRepoInstanceWithDBInstance } from "./createRepoInstanceWithDBInstance";
import { createRepoWithParallelInstance } from "./createRepoWithParallelInstance";
import { createRepoFail } from "./createRepoFail";
import { Repo } from "../../src";
import { mainDB, Article } from "../model";

export function stringifyList() {
    let articles = Article.vSeed(10, article => {
        article.title = "title";
        article.content = "content";
    })
    let string = Repo(articles, mainDB).stringify();
    console.log(string);
}

export function repoTesting() {
    test("it should be able to create a repo instance", createRepoInstance);
    test("it should be able to create a repo instance with a database instance", createRepoInstanceWithDBInstance);
    test("it should be able to create a repo instance with a database parallel instance", createRepoWithParallelInstance);
    test("it should fail when trying to create a repo instance using wrong type for database", createRepoFail);
    test("it should be able to stringify a list", stringifyList)    
}
