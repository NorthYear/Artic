"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
function hashNamespace() {
    var hashedNamespace = database_tooling_1.DatabaseToolingDecorators.hashNamespace({
        hashNamespace: true
    })("name");
    expect(hashedNamespace !== "name").toBe(true);
}
exports.hashNamespace = hashNamespace;
