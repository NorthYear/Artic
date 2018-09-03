"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function appendDateToContext() {
    var options = {
        context: null
    };
    validations_1.Validations.validateContext(options);
    expect(options.context["Date"]).toBe(Date);
}
exports.appendDateToContext = appendDateToContext;
