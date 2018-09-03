"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
function getFirstInstance() {
    var database1 = src_1.Database.vMake("main");
    var database2 = src_1.Database.vMake("backup");
    var para = src_1.Database.vParallel(database1, database2);
    var instance = para.first();
    expect(instance).toBe(database1);
}
exports.getFirstInstance = getFirstInstance;
