"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function remove(done) {
    testing_1.adapter.remove("main/user", "50").then(function () {
        testing_1.adapter.has("main/user", "50").then(function (bool) {
            expect(bool).toBe(false);
            done();
        });
    });
}
exports.remove = remove;
