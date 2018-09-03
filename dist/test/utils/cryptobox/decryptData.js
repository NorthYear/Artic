"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
function decryptData() {
    var encrypted = cryptobox_1.Cryptobox.encrypt("something", process.env.ENCRYPTION_KEY);
    var str = cryptobox_1.Cryptobox.decrypt(encrypted, process.env.ENCRYPTION_KEY);
    expect(str).toBe("something");
}
exports.decryptData = decryptData;
