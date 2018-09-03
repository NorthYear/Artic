"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function validEncryptionKey() {
    var bool = validations_1.Validations.validateEncryptionKey({
        encryptionKey: process.env.ENCRYPTION_KEY
    }, "");
    expect(bool).toBe(true);
}
exports.validEncryptionKey = validEncryptionKey;
