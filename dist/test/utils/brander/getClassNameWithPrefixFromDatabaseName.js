"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brander_1 = require("../../../src/utils/brander");
var src_1 = require("../../../src");
var path_1 = require("path");
function getClassNameWithPrefixFromDatabaseName() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    expect(brander_1.Brander.satisfyEntityName(src_1.Database.vMake("bob", {}), User, "after")).toBe(path_1.join("bob", "User", "after"));
}
exports.getClassNameWithPrefixFromDatabaseName = getClassNameWithPrefixFromDatabaseName;
