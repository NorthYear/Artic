"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
var serializer_1 = require("../../src/utils/serializer");
function unserialize() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var options = { encryptionKey: null };
    var serializer = new serializer_1.Serializer({ User: User }, "");
    var userString = database_tooling_1.DatabaseToolingDecorators.serialize(options, serializer)(new User);
    var instance = database_tooling_1.DatabaseToolingDecorators.unserialize(options, serializer)(userString);
    expect(instance).toBeInstanceOf(User);
}
exports.unserialize = unserialize;
