"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vEmptyParallel(done) {
    model_1.Article.vEmpty(model_1.allDB).then(function () {
        model_1.Article.vCount(model_1.allDB).then(function (count) {
            expect(count).toBe(0);
            done();
        });
    });
}
exports.vEmptyParallel = vEmptyParallel;
