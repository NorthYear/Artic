"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
function notHashNamespace() {
    var hashedNamespace = database_tooling_1.DatabaseToolingDecorators.hashNamespace({
        hashNamespace: false
    })("name");
    expect(hashedNamespace).toBe("name");
}
exports.notHashNamespace = notHashNamespace;
