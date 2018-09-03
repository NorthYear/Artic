"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function adapterInDevMode(done) {
    var warn = jest.spyOn(console, "warn").mockImplementationOnce(function () { return done(); });
    validations_1.Validations.validateAdapter({
        adapter: this,
        devMode: true
    });
    expect(warn).toBeCalled();
}
exports.adapterInDevMode = adapterInDevMode;
