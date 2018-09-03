"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vCopyAll(done) {
    model_1.Article.vCopyAll(model_1.mainDB, model_1.copyDB).then(function () {
        Promise.all([
            model_1.Article.vCount(model_1.mainDB),
            model_1.Article.vCount(model_1.copyDB)
        ]).then(function (counts) {
            expect(counts[0]).toBe(counts[1]);
            done();
        });
    });
}
exports.vCopyAll = vCopyAll;
