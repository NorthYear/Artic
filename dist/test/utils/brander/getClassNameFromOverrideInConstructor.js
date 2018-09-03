"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brander_1 = require("../../../src/utils/brander");
function getClassNameFromOverrideInConstructor() {
    var User = /** @class */ (function () {
        function User() {
        }
        User.vEntityName = "users";
        return User;
    }());
    expect(brander_1.Brander.getClassName(User)).toBe("users");
}
exports.getClassNameFromOverrideInConstructor = getClassNameFromOverrideInConstructor;
