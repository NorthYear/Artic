"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vSeed() {
    var finalList = model_1.Article.vSeed(10, function (article) {
        article.title = "title";
        article.content = "content";
    }).map(function (article) {
        expect(article.id).toBe(undefined);
        expect(article.created).toBe(undefined);
        expect(article.updated).toBe(undefined);
        expect(article.title).toBe("title");
        expect(article.content).toBe("content");
        return article;
    });
    expect(finalList.length).toBe(10);
}
exports.vSeed = vSeed;
