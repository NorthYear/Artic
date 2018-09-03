"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
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
