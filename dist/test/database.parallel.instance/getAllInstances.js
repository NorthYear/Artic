"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
function getAllInstances() {
    var database1 = src_1.Database.vMake("main");
    var database2 = src_1.Database.vMake("backup");
    var para = src_1.Database.vParallel(database1, database2);
    var instances = para.getInstances();
    expect(instances.length).toBe(2);
    expect(instances[0]).toBe(database1);
    expect(instances[1]).toBe(database2);
}
exports.getAllInstances = getAllInstances;
