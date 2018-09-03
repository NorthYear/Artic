"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var database_parallel_instance_1 = require("../../src/database.parallel.instance");
function createDatabaseParallelInstance() {
    expect(src_1.Database.vParallel(src_1.Database.vMake("main"))).toBeInstanceOf(database_parallel_instance_1.DatabaseParallelInstance);
}
exports.createDatabaseParallelInstance = createDatabaseParallelInstance;
