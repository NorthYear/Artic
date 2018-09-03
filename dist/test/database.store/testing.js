"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vSet_1 = require("./vSet");
var vSetParallel_1 = require("./vSetParallel");
var vHas_1 = require("./vHas");
var vHasParallel_1 = require("./vHasParallel");
var vGet_1 = require("./vGet");
var vGetParallel_1 = require("./vGetParallel");
var vRemove_1 = require("./vRemove");
var vRemoveParallel_1 = require("./vRemoveParallel");
function databaseStoreTesting() {
    test("it should be able to determine if a record exists", vHas_1.vHas);
    test("it should be able to determine if a record exist on parallel instance", vHasParallel_1.vHasParallel);
    test("it should be able to set a value", vSet_1.vSet);
    test("it should be able to set a value for parallel instance", vSetParallel_1.vSetParallel);
    test("it should be able to get a record", vGet_1.vGet);
    test("it should be able to get a record from parallel instance", vGetParallel_1.vGetParallel);
    test("it should be able to remove a record", vRemove_1.vRemove);
    test("it should be able to remove a record with parallel instance", vRemoveParallel_1.vRemoveParallel);
}
exports.databaseStoreTesting = databaseStoreTesting;
