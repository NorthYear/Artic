"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllInstances_1 = require("./getAllInstances");
var getFirstInstance_1 = require("./getFirstInstance");
var failWhenNoInstances_1 = require("./failWhenNoInstances");
function databaseParallelInstanceTesting() {
    test("it should be able to get all instances", getAllInstances_1.getAllInstances);
    test("it should be able to get the first instance", getFirstInstance_1.getFirstInstance);
    test("it should fail when no instances exist on first", failWhenNoInstances_1.failWhenNoInstances);
}
exports.databaseParallelInstanceTesting = databaseParallelInstanceTesting;
