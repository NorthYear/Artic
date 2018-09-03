"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function empty(done) {
    testing_1.adapter.empty().then(function () {
        testing_1.adapter.count("main/user").then(function (count) {
            expect(count).toBe(0);
            done();
        });
    });
}
exports.empty = empty;
