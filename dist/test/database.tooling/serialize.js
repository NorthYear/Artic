"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
var serializer_1 = require("../../src/utils/serializer");
function serialize() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var options = { encryptionKey: null };
    var serializer = new serializer_1.Serializer({ User: User }, "");
    var userString = database_tooling_1.DatabaseToolingDecorators.serialize(options, serializer)(new User);
    expect(/\{\"\#artic\-instance\-type\"\:\"User\"\}/g.test(userString)).toBe(true);
}
exports.serialize = serialize;
