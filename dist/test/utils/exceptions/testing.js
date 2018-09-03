"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var formatMessages_1 = require("./formatMessages");
var throwAnError_1 = require("./throwAnError");
var consoleWarn_1 = require("./consoleWarn");
var nonErrorPass_1 = require("./nonErrorPass");
function utilsExceptionsTesting() {
    test("it should be able to format messages", formatMessages_1.formatMessages);
    test("it should be able to throw an error", throwAnError_1.throwAnError);
    test("it should be able to console warn", consoleWarn_1.consoleWarn);
    test("it should allow non-errors to pass through", nonErrorPass_1.nonErrorPass);
}
exports.utilsExceptionsTesting = utilsExceptionsTesting;
