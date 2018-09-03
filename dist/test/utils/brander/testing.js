"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getClassNameFromConstructor_1 = require("./getClassNameFromConstructor");
var getClassNameFromInstance_1 = require("./getClassNameFromInstance");
var getClassNameFromOverrideInConstructor_1 = require("./getClassNameFromOverrideInConstructor");
var getClassNameFromOverrideInstance_1 = require("./getClassNameFromOverrideInstance");
var getClassNameWithPrefixFromDatabaseName_1 = require("./getClassNameWithPrefixFromDatabaseName");
var failWithoutAName_1 = require("./failWithoutAName");
function utilsBranderTesting() {
    test("it should be able to get the class name from a constructor", getClassNameFromConstructor_1.getClassNameFromConstructor);
    test("it should be able to get the class name from an instance", getClassNameFromInstance_1.getClassNameFromInstance);
    test("it should be able to get the class name from the override in a constructor situation", getClassNameFromOverrideInConstructor_1.getClassNameFromOverrideInConstructor);
    test("it should be able to get the class name from the override in an instance situation", getClassNameFromOverrideInstance_1.getClassNameFromOverrideInstance);
    test("it should be able get the entity name with database prefix", getClassNameWithPrefixFromDatabaseName_1.getClassNameWithPrefixFromDatabaseName);
    test("it should fail when when presented with a primitive type with out a name", failWithoutAName_1.failWithoutAName);
}
exports.utilsBranderTesting = utilsBranderTesting;
