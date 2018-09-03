"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vRemoveMany(done) {
    var articles = model_1.Article.vSeed(100, function (article) {
        article.title = "title";
        article.content = "content";
    });
    model_1.Article.vSaveMany(model_1.allDB, articles).then(function (articles) {
        model_1.Article.vRemoveMany(model_1.mainDB, articles.map(function (a) { return a.id; })).then(function () {
            Promise.all(articles.map(function (article) { return model_1.Article.vHas(model_1.mainDB, article.id); })).then(function (bools) {
                bools.forEach(function (bool) {
                    expect(bool).toBe(false);
                });
                done();
            });
        });
    });
}
exports.vRemoveMany = vRemoveMany;
