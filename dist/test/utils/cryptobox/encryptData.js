"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
function encryptData() {
    var encrypted = cryptobox_1.Cryptobox.encrypt("something", process.env.ENCRYPTION_KEY);
    expect(encrypted !== "something").toBe(true);
    expect(encrypted.indexOf(":")).toBe(32);
}
exports.encryptData = encryptData;
