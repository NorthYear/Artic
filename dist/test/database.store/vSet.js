"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vSet(done) {
    var imageStore = model_1.Article.vStore("images");
    var images = [
        "image.jpg",
        "image.2.jpg"
    ];
    imageStore.vSet(model_1.mainDB, "id-1", images).then(function () {
        imageStore.vHas(model_1.mainDB, "id-1").then(function (bool) {
            expect(bool).toBe(true);
            done();
        });
    });
}
exports.vSet = vSet;
