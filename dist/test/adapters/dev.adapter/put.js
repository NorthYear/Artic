"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function put(done) {
    testing_1.adapter.put("main/user", "1", "user-data-for-1").then(function () {
        testing_1.adapter.has("main/user", "1").then(function (bool) {
            expect(bool).toBe(true);
            done();
        });
    });
}
exports.put = put;
