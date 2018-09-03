"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vNew() {
    var article = model_1.Article.vNew({
        title: "title",
        content: "content"
    });
    expect(article.id).toBe(undefined);
    expect(article.created).toBe(undefined);
    expect(article.updated).toBe(undefined);
    expect(article.title).toBe("title");
    expect(article.content).toBe("content");
    var article2 = model_1.Article.vNew();
    expect(article2.id).toBe(undefined);
    expect(article2.created).toBe(undefined);
    expect(article2.updated).toBe(undefined);
    expect(article2.title).toBe(undefined);
    expect(article2.content).toBe(undefined);
}
exports.vNew = vNew;
