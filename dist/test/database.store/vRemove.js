"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vRemove(done) {
    model_1.Article.vStore("remove_namespace")
        .vSet(model_1.mainDB, "name", "something to remove")
        .then(function () {
        model_1.Article.vStore("remove_namespace").vHas(model_1.mainDB, "name").then(function (bool) {
            expect(bool).toBe(true);
            model_1.Article.vStore("remove_namespace").vRemove(model_1.mainDB, "name").then(function () {
                model_1.Article.vStore("remove_namespace").vHas(model_1.mainDB, "name").then(function (bool) {
                    expect(bool).toBe(false);
                    done();
                });
            });
        });
    });
}
exports.vRemove = vRemove;
