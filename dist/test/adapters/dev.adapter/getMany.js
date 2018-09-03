"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function getMany(done) {
    testing_1.adapter.getMany("main/user", ["1", "5", "8"]).then(function (values) {
        expect(values[0]).toBe("user-data-for-1");
        expect(values[1]).toBe("user-data-for-5");
        expect(values[2]).toBe("user-data-for-8");
        done();
    });
}
exports.getMany = getMany;
