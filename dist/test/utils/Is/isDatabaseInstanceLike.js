"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
var database_instance_1 = require("../../../src/database.instance");
var database_parallel_instance_1 = require("../../../src/database.parallel.instance");
function isDatabaseInstanceLike() {
    var instance = new database_instance_1.DatabaseInstance("main");
    var parallel = new database_parallel_instance_1.DatabaseParallelInstance([new database_instance_1.DatabaseInstance("main")]);
    expect(is_1.Is.databaseInstanceLike(instance)).toBe(true);
    expect(is_1.Is.databaseInstanceLike(parallel)).toBe(true);
    expect(is_1.Is.databaseInstanceLike(this)).toBe(false);
}
exports.isDatabaseInstanceLike = isDatabaseInstanceLike;
