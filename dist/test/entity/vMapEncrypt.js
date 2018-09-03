"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vMapEncrypt() {
    var encrypted = model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vMapEncrypt(process.env.API_SHARED_KEY, function (article) {
        return {
            name: article.title
        };
    });
    expect(encrypted.indexOf(":")).toBe(32);
}
exports.vMapEncrypt = vMapEncrypt;
