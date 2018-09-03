"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vClose(done) {
    model_1.Article.vClose(model_1.copyDB).then(function () {
        done();
    });
}
exports.vClose = vClose;
