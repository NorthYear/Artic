"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brander_1 = require("../../../src/utils/brander");
function getClassNameFromInstance() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    expect(brander_1.Brander.getClassName(new User)).toBe("User");
}
exports.getClassNameFromInstance = getClassNameFromInstance;
