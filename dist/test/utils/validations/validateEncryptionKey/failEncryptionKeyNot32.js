"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function failEncryptionKeyNot32() {
    expect(function () {
        validations_1.Validations.validateEncryptionKey({
            encryptionKey: "sdflkjsdf"
        }, "");
    }).toThrow();
}
exports.failEncryptionKeyNot32 = failEncryptionKeyNot32;
