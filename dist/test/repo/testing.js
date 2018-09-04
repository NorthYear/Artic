"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createRepoInstance_1 = require("./createRepoInstance");
var createRepoInstanceWithDBInstance_1 = require("./createRepoInstanceWithDBInstance");
var createRepoWithParallelInstance_1 = require("./createRepoWithParallelInstance");
var createRepoFail_1 = require("./createRepoFail");
var src_1 = require("../../src");
var model_1 = require("../model");
function stringifyList() {
    var articles = model_1.Article.vSeed(10, function (article) {
        article.title = "title";
        article.content = "content";
    });
    var string = src_1.Repo(articles, model_1.mainDB).stringify();
    console.log(string);
}
exports.stringifyList = stringifyList;
function repoTesting() {
    test("it should be able to create a repo instance", createRepoInstance_1.createRepoInstance);
    test("it should be able to create a repo instance with a database instance", createRepoInstanceWithDBInstance_1.createRepoInstanceWithDBInstance);
    test("it should be able to create a repo instance with a database parallel instance", createRepoWithParallelInstance_1.createRepoWithParallelInstance);
    test("it should fail when trying to create a repo instance using wrong type for database", createRepoFail_1.createRepoFail);
    test("it should be able to stringify a list", stringifyList);
}
exports.repoTesting = repoTesting;
