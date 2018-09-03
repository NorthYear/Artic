"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function getManyFail(done) {
    testing_1.adapter.getMany("main/user", ["654654987654", "65", "1"]).catch(function (err) {
        done();
    });
}
exports.getManyFail = getManyFail;
