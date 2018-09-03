"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vAllParallel(done) {
    model_1.Article.vAll(model_1.allDB).then(function (articles) {
        expect(Array.isArray(articles)).toBe(true);
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
exports.vAllParallel = vAllParallel;
