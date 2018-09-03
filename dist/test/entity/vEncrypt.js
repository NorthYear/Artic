"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vEncrypt() {
    var encrypted = model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vEncrypt(process.env.API_SHARED_KEY);
    expect(encrypted.indexOf(":")).toBe(32);
}
exports.vEncrypt = vEncrypt;
