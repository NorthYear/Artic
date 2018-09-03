"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
//string
//boolean
//function
//array
//object
//undefined
//null
//error
function isHtml() {
    expect(is_1.Is.html("<script>")).toBe(true);
    expect(is_1.Is.html("something <div>white</div>")).toBe(true);
    expect(is_1.Is.html("lskdjlkjsdf")).toBe(false);
}
exports.isHtml = isHtml;
