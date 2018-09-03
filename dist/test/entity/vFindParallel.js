"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vFindParallel(done) {
    var article = new model_1.Article();
    article.title = "title";
    article.content = "content";
    article.vSave(model_1.allDB).then(function (article) {
        model_1.Article.vFind(model_1.allDB, article.id).then(function (article) {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(article.title).toBe("title");
            expect(article.content).toBe("content");
            done();
        });
    });
}
exports.vFindParallel = vFindParallel;
