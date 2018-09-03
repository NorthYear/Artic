"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vConsole(done) {
    var dir = jest.spyOn(console, "dir").mockImplementationOnce(function () {
        done();
    });
    model_1.Article.vNew({
        title: "title",
        content: "content"
    }).vConsole();
    expect(dir).toBeCalled();
}
exports.vConsole = vConsole;
