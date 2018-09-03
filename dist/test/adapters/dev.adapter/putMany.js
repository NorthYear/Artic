"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function putMany(done) {
    var records = [];
    for (var i = 2; i <= 100; i++) {
        records.push({
            key: i.toString(),
            value: "user-data-for-" + i.toString()
        });
    }
    testing_1.adapter.putMany("main/user", records).then(function () {
        Promise.all([
            testing_1.adapter.has("main/user", "2").then(function (bool) {
                expect(bool).toBe(true);
            }),
            testing_1.adapter.has("main/user", "100").then(function (bool) {
                expect(bool).toBe(true);
            })
        ]).then(function (bools) {
            done();
        });
    });
}
exports.putMany = putMany;
