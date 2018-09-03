"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
var database_store_1 = require("../../src/database.store");
function vStore() {
    expect(model_1.Article.vStore("featured.images")).toBeInstanceOf(database_store_1.DatabaseStore);
}
exports.vStore = vStore;
