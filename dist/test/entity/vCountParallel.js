"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vCountParallel(done) {
    model_1.Article.vCount(model_1.allDB).then(function (count) {
        expect(typeof count).toBe("number");
        expect(count).toBe(4);
        done();
    });
}
exports.vCountParallel = vCountParallel;
