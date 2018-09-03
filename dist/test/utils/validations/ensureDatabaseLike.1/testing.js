"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
var database_instance_1 = require("../../../../src/database.instance");
function isDatabaseLike() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    validations_1.Validations.ensureDatabaseLike(new database_instance_1.DatabaseInstance("main"), User, "testing(<<db-instance>>)");
}
exports.isDatabaseLike = isDatabaseLike;
function notDatabaseLike() {
    var _this = this;
    expect(function () {
        var User = /** @class */ (function () {
            function User() {
            }
            return User;
        }());
        validations_1.Validations.ensureDatabaseLike(_this, User, "testing(<<db-instance>>)");
    }).toThrow();
}
exports.notDatabaseLike = notDatabaseLike;
function utilsValidationsEnsureDatabaseLike() {
    test("it should be able to pass through if a variable is database like", isDatabaseLike);
    test("it should fail when variable is not database like", notDatabaseLike);
}
exports.utilsValidationsEnsureDatabaseLike = utilsValidationsEnsureDatabaseLike;
