"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function getFail(done) {
    testing_1.adapter.get("main/user", "654654987654").catch(function (err) {
        done();
    });
}
exports.getFail = getFail;
