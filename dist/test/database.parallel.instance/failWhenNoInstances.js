"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
function failWhenNoInstances() {
    var para = src_1.Database.vParallel();
    expect(function () {
        para.first();
    }).toThrow();
}
exports.failWhenNoInstances = failWhenNoInstances;
