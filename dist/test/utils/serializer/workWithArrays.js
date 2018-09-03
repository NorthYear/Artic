"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = require("../../../src/utils/serializer");
var Something_1 = require("./Something");
function workWithArrays() {
    var somethings = [new Something_1.Something, new Something_1.Something, {}];
    var serializer = new serializer_1.Serializer({ Something: Something_1.Something, Date: Date }, "namespace");
    var string = serializer.stringify(somethings);
    expect(typeof string).toBe("string");
    expect(/\"#artic-instance-type\"\:\"Something\"/g.test(string)).toBe(true);
    var list = serializer.parse(string);
    expect(Array.isArray(list)).toBe(true);
}
exports.workWithArrays = workWithArrays;
