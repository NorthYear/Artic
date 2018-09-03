"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
var badAdapter_1 = require("./badAdapter");
function brokenAdapter(done) {
    var warn = jest.spyOn(console, "warn").mockImplementationOnce(function () {
        done();
    });
    validations_1.Validations.validateAdapter({
        adapter: badAdapter_1.badAdapter()
    });
    expect(warn).toBeCalled();
}
exports.brokenAdapter = brokenAdapter;
