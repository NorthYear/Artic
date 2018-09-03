"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultHashOptions_1 = require("./defaultHashOptions");
var hashKeysNotBoolean_1 = require("./hashKeysNotBoolean");
var hashNamespaceNotBoolean_1 = require("./hashNamespaceNotBoolean");
function utilsValidationsValidateHashes() {
    test("it should be able to set default hash options if none are provided", defaultHashOptions_1.defaultHashOptions);
    test("it should fail when hashKeys is not a boolean value", hashKeysNotBoolean_1.hashKeysNotBoolean);
    test("it should fail when hashNamespaces is not a boolean value", hashNamespaceNotBoolean_1.hashNamespaceNotBoolean);
}
exports.utilsValidationsValidateHashes = utilsValidationsValidateHashes;
