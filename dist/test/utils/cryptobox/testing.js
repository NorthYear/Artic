"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decryptData_1 = require("./decryptData");
var encryptData_1 = require("./encryptData");
var hashData_1 = require("./hashData");
function utilsCryptoboxTesting() {
    test("it should be able to hash data with SHA-256", hashData_1.hashData);
    test("it should be able to encrypt data", encryptData_1.encryptData);
    test("is should be able to decrypt data", decryptData_1.decryptData);
}
exports.utilsCryptoboxTesting = utilsCryptoboxTesting;
