"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = require("../../../src/utils/serializer");
var Something_1 = require("./Something");
function serialize() {
    var serializer = new serializer_1.Serializer({ Something: Something_1.Something, Date: Date }, "namespace");
    var instance = new Something_1.Something;
    var string = serializer.stringify(instance);
    expect(typeof string).toBe("string");
    expect(/\"#artic-instance-type\"\:\"Something\"/g.test(string)).toBe(true);
}
exports.serialize = serialize;
