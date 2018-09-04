"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var repo_instance_1 = require("../../src/repo.instance");
var model_1 = require("../model");
function createRepoWithParallelInstance() {
    expect(src_1.Repo([], model_1.allDB)).toBeInstanceOf(repo_instance_1.RepoInstance);
}
exports.createRepoWithParallelInstance = createRepoWithParallelInstance;
