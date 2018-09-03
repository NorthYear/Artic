"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vMapJson() {
    var json = model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vMapJson(function (article) {
        return {
            title: article.title,
            content: article.content,
            titleLength: article.title.length
        };
    });
    expect(typeof json).toBe("string");
}
exports.vMapJson = vMapJson;
