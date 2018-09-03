"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function emptyNamespace(done) {
    var records = [];
    for (var i = 2; i <= 100; i++) {
        records.push({
            key: i.toString(),
            value: "alternate-data-for-" + i.toString()
        });
    }
    testing_1.adapter.putMany("main/alternate", records).then(function () {
        testing_1.adapter.emptyNamespace("main/alternate").then(function () {
            testing_1.adapter.count("main/alternate").then(function (count) {
                expect(count).toBe(0);
                done();
            });
        });
    });
}
exports.emptyNamespace = emptyNamespace;
