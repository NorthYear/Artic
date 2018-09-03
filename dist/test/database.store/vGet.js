"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vGet(done) {
    model_1.Article.vStore("get_namespace").vSet(model_1.mainDB, "name", "something").then(function () {
        model_1.Article.vStore("get_namespace").vGet(model_1.mainDB, "name").then(function (name) {
            expect(name).toBe("something");
            done();
        });
    });
}
exports.vGet = vGet;
