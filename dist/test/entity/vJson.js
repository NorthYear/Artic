"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vJson() {
    var json = model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vJson();
    expect(typeof json).toBe("string");
}
exports.vJson = vJson;
