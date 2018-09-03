"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vInject(done) {
    model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vInject(function (article) {
        expect(article.title).toBe("title");
        expect(article.content).toBe("content");
        done();
    });
}
exports.vInject = vInject;
