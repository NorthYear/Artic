"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var database_instance_1 = require("../../src/database.instance");
function createDatabaseInstance() {
    expect(src_1.Database.vMake("main")).toBeInstanceOf(database_instance_1.DatabaseInstance);
}
exports.createDatabaseInstance = createDatabaseInstance;
