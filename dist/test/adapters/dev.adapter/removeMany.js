"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function removeMany(done) {
    testing_1.adapter.removeMany("main/user", ["51", "52"]).then(function () {
        Promise.all([
            testing_1.adapter.has("main/user", "51"),
            testing_1.adapter.has("main/user", "52")
        ]).then(function (bools) {
            expect(bools[0]).toBe(false);
            expect(bools[1]).toBe(false);
            done();
        });
    });
}
exports.removeMany = removeMany;
