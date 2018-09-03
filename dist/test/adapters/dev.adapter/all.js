"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function all(done) {
    testing_1.adapter.all("main/user").then(function (values) {
        expect(Array.isArray(values)).toBe(true);
        expect(values.length).toBe(97);
        done();
    });
}
exports.all = all;
