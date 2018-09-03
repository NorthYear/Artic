"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
function hashData() {
    var hash = cryptobox_1.Cryptobox.hash("something");
    expect(hash.length).toBe(64);
    expect(hash).toBe("3fc9b689459d738f8c88a3a48aa9e33542016b7a4052e001aaa536fca74813cb");
}
exports.hashData = hashData;
