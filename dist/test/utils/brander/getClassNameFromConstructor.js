"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brander_1 = require("../../../src/utils/brander");
function getClassNameFromConstructor() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    expect(brander_1.Brander.getClassName(User)).toBe("User");
}
exports.getClassNameFromConstructor = getClassNameFromConstructor;
