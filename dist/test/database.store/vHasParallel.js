"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vHasParallel(done) {
    model_1.Article.vStore("names").vSet(model_1.mainDB, "name", "something").then(function () {
        model_1.Article.vStore("names").vHas(model_1.mainDB, "name").then(function (bool) {
            expect(bool).toBe(true);
            done();
        });
    });
}
exports.vHasParallel = vHasParallel;
