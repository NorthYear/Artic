"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rootEmitter_1 = require("./rootEmitter");
var autoCreateEmitter_1 = require("./autoCreateEmitter");
var cacheEmitter_1 = require("./cacheEmitter");
function databaseEventStoreTesting() {
    test("it should store a root emitter", rootEmitter_1.rootEmitter);
    test("it should auto create event emitter if not created", autoCreateEmitter_1.autoCreateEmitter);
    test("it should return cached event emiiter if created", cacheEmitter_1.cacheEmitter);
}
exports.databaseEventStoreTesting = databaseEventStoreTesting;
