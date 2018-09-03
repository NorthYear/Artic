"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function close(done) {
    testing_1.adapter.close().then(function (value) {
        expect(value).toBe(void 0);
        done();
    });
}
exports.close = close;
