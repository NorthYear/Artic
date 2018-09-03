"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function count(done) {
    testing_1.adapter.count("main/user").then(function (value) {
        expect(value).toBe(100);
        done();
    });
}
exports.count = count;
