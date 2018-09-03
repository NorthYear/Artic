"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vStream(done) {
    var articles = [];
    model_1.Article.vStream(model_1.mainDB, function (article, abort) {
        articles.push(article);
        abort();
    }).then(function () {
        expect(Array.isArray(articles)).toBe(true);
        expect(articles.length).toBe(1);
        articles.forEach(function (article) {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(typeof article.title).toBe("string");
            expect(typeof article.content).toBe("string");
        });
        done();
    });
}
exports.vStream = vStream;
