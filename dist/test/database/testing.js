"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDatabaseParallelInstance_1 = require("./createDatabaseParallelInstance");
var createDatabaseInstance_1 = require("./createDatabaseInstance");
function databaseTesting() {
    test("it should be able to create a database instance", createDatabaseInstance_1.createDatabaseInstance);
    test("it should be able to create a parallel database instance", createDatabaseParallelInstance_1.createDatabaseParallelInstance);
}
exports.databaseTesting = databaseTesting;
