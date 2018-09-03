"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function get(done) {
    testing_1.adapter.get("main/user", "1").then(function (value) {
        expect(value).toBe("user-data-for-1");
        done();
    });
}
exports.get = get;
