"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function notDatabase() {
    var _this = this;
    expect(function () {
        var User = /** @class */ (function () {
            function User() {
            }
            return User;
        }());
        validations_1.Validations.ensureDatabase(_this, User, "testing(<<db-instance>>)");
    }).toThrow();
}
exports.notDatabase = notDatabase;
