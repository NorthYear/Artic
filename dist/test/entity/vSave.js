"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vSave(done) {
    var article = model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vSave(model_1.mainDB).then(function (article) {
        expect(typeof article.id).toBe("string");
        expect(article.created).toBeInstanceOf(Date);
        expect(article.updated).toBeInstanceOf(Date);
        expect(article.title).toBe("title");
        expect(article.content).toBe("content");
        done();
    });
}
exports.vSave = vSave;
