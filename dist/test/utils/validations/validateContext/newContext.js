"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function newContext() {
    var options = {
        context: {}
    };
    validations_1.Validations.validateContext(options);
    expect(options.context["Date"]).toBe(Date);
}
exports.newContext = newContext;
