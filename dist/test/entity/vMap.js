"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vMap() {
    var titleString = model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vMap(function (article) {
        return "Hello, my title is \"" + article.title + "\"";
    });
    expect(titleString).toBe("Hello, my title is \"title\"");
}
exports.vMap = vMap;
