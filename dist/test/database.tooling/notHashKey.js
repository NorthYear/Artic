"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
function notHashKey() {
    var hashedKey = database_tooling_1.DatabaseToolingDecorators.hashKey({
        hashKeys: false
    })("key");
    expect(hashedKey === "key").toBe(true);
}
exports.notHashKey = notHashKey;
