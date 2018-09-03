"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vRemoveParallel(done) {
    model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vSave(model_1.allDB).then(function (article) {
        article.vRemove(model_1.allDB).then(function () {
            done();
        });
    });
}
exports.vRemoveParallel = vRemoveParallel;
