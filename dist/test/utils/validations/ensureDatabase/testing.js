"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notDatabase_1 = require("./notDatabase");
var isDatabase_1 = require("./isDatabase");
function utilsValidationsEnsureDatabase() {
    test("it should be able to pass through if a variable is database", isDatabase_1.isDatabase);
    test("it should fail when variable is not database", notDatabase_1.notDatabase);
}
exports.utilsValidationsEnsureDatabase = utilsValidationsEnsureDatabase;
