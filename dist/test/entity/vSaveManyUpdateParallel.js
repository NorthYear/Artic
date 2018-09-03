"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vSaveManyUpdateParallel(done) {
    var articles = model_1.Article.vSeed(100, function (article) {
        article.title = "title";
        article.content = "content";
    });
    model_1.Article.vSaveMany(model_1.allDB, articles).then(function (articles) {
        articles.forEach(function (article) {
            article.title = "something-else";
            article.content = "something-else";
        });
        model_1.Article.vSaveMany(model_1.allDB, articles).then(function () {
            articles.forEach(function (article) {
                expect(typeof article.id).toBe("string");
                expect(article.created).toBeInstanceOf(Date);
                expect(article.updated).toBeInstanceOf(Date);
                expect(article.title).toBe("something-else");
                expect(article.content).toBe("something-else");
            });
            done();
        });
    });
}
exports.vSaveManyUpdateParallel = vSaveManyUpdateParallel;
