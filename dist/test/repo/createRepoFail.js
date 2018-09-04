"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
function createRepoFail() {
    var _this = this;
    expect(function () {
        src_1.Repo([], _this);
    }).toThrow();
}
exports.createRepoFail = createRepoFail;
