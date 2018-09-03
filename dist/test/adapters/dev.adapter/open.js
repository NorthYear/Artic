"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function open(done) {
    testing_1.adapter.open().then(function (value) {
        expect(value).toBe(void 0);
        done();
    });
}
exports.open = open;
