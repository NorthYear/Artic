"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
var getAString_1 = require("./getAString");
function hashKeysNotBoolean() {
    var options = {
        hashKeys: getAString_1.getAString(),
        hashNamespace: true
    };
    expect(function () {
        validations_1.Validations.validateHashOptions(options, "");
    }).toThrow();
}
exports.hashKeysNotBoolean = hashKeysNotBoolean;
