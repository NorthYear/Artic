"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendDateToContext_1 = require("./appendDateToContext");
var newContext_1 = require("./newContext");
function utilsValidationValidateContext() {
    test("it should append Date to the context provided", appendDateToContext_1.appendDateToContext);
    test("is should create a new context and append Date to context", newContext_1.newContext);
}
exports.utilsValidationValidateContext = utilsValidationValidateContext;
