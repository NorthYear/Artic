"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
function failRemoveRecord() {
    expect(function () {
        model_1.Article.vNew().vRemove(model_1.mainDB);
    }).toThrow();
}
exports.failRemoveRecord = failRemoveRecord;
