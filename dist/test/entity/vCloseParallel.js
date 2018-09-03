"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vCloseParallel(done) {
    model_1.Article.vClose(model_1.allDB).then(function () {
        done();
    });
}
exports.vCloseParallel = vCloseParallel;
