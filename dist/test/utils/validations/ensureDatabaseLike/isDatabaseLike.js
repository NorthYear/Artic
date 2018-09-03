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
