"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isDatabaseLike_1 = require("./isDatabaseLike");
var notDatabaseLike_1 = require("./notDatabaseLike");
function utilsValidationsEnsureDatabaseLike() {
    test("it should be able to pass through if a variable is database like", isDatabaseLike_1.isDatabaseLike);
    test("it should fail when variable is not database like", notDatabaseLike_1.notDatabaseLike);
}
exports.utilsValidationsEnsureDatabaseLike = utilsValidationsEnsureDatabaseLike;
