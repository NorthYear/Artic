"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
var database_instance_1 = require("../../../src/database.instance");
var database_parallel_instance_1 = require("../../../src/database.parallel.instance");
function isParallelDatabaseInstance() {
    expect(is_1.Is.databaseParallelInstance(new database_parallel_instance_1.DatabaseParallelInstance([new database_instance_1.DatabaseInstance("main")]))).toBe(true);
    expect(is_1.Is.databaseParallelInstance(this)).toBe(false);
}
exports.isParallelDatabaseInstance = isParallelDatabaseInstance;
