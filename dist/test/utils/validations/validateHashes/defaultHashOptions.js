"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function defaultHashOptions() {
    var options = {};
    validations_1.Validations.validateHashOptions(options, "");
    expect(options.hashKeys).toBe(false);
    expect(options.hashNamespace).toBe(false);
}
exports.defaultHashOptions = defaultHashOptions;
