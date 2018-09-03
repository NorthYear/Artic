"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
function hashKey() {
    var hashedKey = database_tooling_1.DatabaseToolingDecorators.hashKey({
        hashKeys: true
    })("key");
    expect(hashedKey !== "key").toBe(true);
}
exports.hashKey = hashKey;
