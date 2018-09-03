"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
var events_1 = require("events");
function vEventsParallel() {
    expect(model_1.Article.vEvents(model_1.allDB)).toBeInstanceOf(events_1.EventEmitter);
}
exports.vEventsParallel = vEventsParallel;
