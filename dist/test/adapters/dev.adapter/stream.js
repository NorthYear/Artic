"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function stream(done) {
    testing_1.adapter.stream("main/user", function (key, value, abort) {
        if (parseInt(key) > 65) {
            expect(typeof value).toBe("string");
            expect(typeof key).toBe("string");
            abort();
        }
    }).then(function () {
        done();
    });
}
exports.stream = stream;
