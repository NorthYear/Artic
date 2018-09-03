"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vFindMany(done) {
    var articles = model_1.Article.vSeed(100, function (article) {
        article.title = "title";
        article.content = "content";
    });
    model_1.Article.vSaveMany(model_1.mainDB, articles).then(function (articles) {
        model_1.Article.vFindMany(model_1.mainDB, articles.map(function (a) { return a.id; })).then(function (articles) {
            articles.forEach(function (article) {
                expect(typeof article.id).toBe("string");
                expect(article.created).toBeInstanceOf(Date);
                expect(article.updated).toBeInstanceOf(Date);
                expect(article.title).toBe("title");
                expect(article.content).toBe("content");
                done();
            });
        });
    });
}
exports.vFindMany = vFindMany;
