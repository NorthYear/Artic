"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vHasParallel(done) {
    model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vSave(model_1.mainDB).then(function (article) {
        Promise.all([
            model_1.Article.vHas(model_1.allDB, article.id).then(function (bool) {
                expect(bool).toBe(true);
            }),
            model_1.Article.vHas(model_1.allDB, "lskdjflkjsdf").then(function (bool) {
                expect(bool).toBe(false);
            })
        ]).then(function () {
            done();
        });
    });
}
exports.vHasParallel = vHasParallel;
