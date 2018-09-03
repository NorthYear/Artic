"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function emptyDB(done) {
    model_1.mainDB.empty().then(function () {
        model_1.Article.vCount(model_1.mainDB).then(function (count) {
            expect(count).toBe(0);
            done();
        });
    });
}
exports.emptyDB = emptyDB;
