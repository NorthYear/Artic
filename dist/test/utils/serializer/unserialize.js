"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = require("../../../src/utils/serializer");
var Something_1 = require("./Something");
function unserialize() {
    var serializer = new serializer_1.Serializer({ Something: Something_1.Something, Date: Date }, "namespace");
    var instance = new Something_1.Something;
    instance.title = "title";
    instance.content = "content";
    var string = serializer.stringify(instance);
    var i = serializer.parse(string);
    expect(i).toBeInstanceOf(Something_1.Something);
}
exports.unserialize = unserialize;
