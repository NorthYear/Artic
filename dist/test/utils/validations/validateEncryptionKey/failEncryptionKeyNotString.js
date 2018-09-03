"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function failEncryptionKeyNotString() {
    var _this = this;
    expect(function () {
        validations_1.Validations.validateEncryptionKey({
            encryptionKey: _this
        }, "");
    }).toThrow();
}
exports.failEncryptionKeyNotString = failEncryptionKeyNotString;
