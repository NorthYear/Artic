"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function vSetParallel(done) {
    var imageStore = model_1.Article.vStore("images");
    var images = [
        "image.jpg",
        "image.2.jpg"
    ];
    imageStore.vSet(model_1.allDB, "id-2", images).then(function () {
        imageStore.vHas(model_1.allDB, "id-2").then(function (bool) {
            expect(bool).toBe(true);
            done();
        });
    });
}
exports.vSetParallel = vSetParallel;
