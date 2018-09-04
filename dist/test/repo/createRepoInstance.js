"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var repo_instance_1 = require("../../src/repo.instance");
function createRepoInstance() {
    expect(src_1.Repo([])).toBeInstanceOf(repo_instance_1.RepoInstance);
}
exports.createRepoInstance = createRepoInstance;
