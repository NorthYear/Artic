"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noConstructorFound_1 = require("./noConstructorFound");
var workWithArrays_1 = require("./workWithArrays");
var unserialize_1 = require("./unserialize");
var serialize_1 = require("./serialize");
function utilsSerializerTesting() {
    test("it should be able to serialize", serialize_1.serialize);
    test("it should be able to unserialize", unserialize_1.unserialize);
    test("it should fail when no constructor is found", noConstructorFound_1.noConstructorFound);
    test("it should be able to stringify and parse an array", workWithArrays_1.workWithArrays);
}
exports.utilsSerializerTesting = utilsSerializerTesting;
