"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
var events_1 = require("events");
function vEvents() {
    expect(model_1.Article.vEvents(model_1.mainDB)).toBeInstanceOf(events_1.EventEmitter);
}
exports.vEvents = vEvents;
