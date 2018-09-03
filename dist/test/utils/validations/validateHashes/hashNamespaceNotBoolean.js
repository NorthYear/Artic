"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
var getAString_1 = require("./getAString");
function hashNamespaceNotBoolean() {
    var options = {
        hashKeys: false,
        hashNamespace: getAString_1.getAString()
    };
    expect(function () {
        validations_1.Validations.validateHashOptions(options, "");
    }).toThrow();
}
exports.hashNamespaceNotBoolean = hashNamespaceNotBoolean;
