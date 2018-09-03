"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adapterInDevMode_1 = require("./adapterInDevMode");
var validateAdapter_1 = require("./validateAdapter");
var adapterNotSet_1 = require("./adapterNotSet");
var brokenAdapter_1 = require("./brokenAdapter");
function utilsValidationsValidateAdapterTesting() {
    test("it should not validate an adapter in dev mode", adapterInDevMode_1.adapterInDevMode);
    test("it should be able to validate an adapter", validateAdapter_1.validateAdapter);
    test("it should ignore an adapter not set", adapterNotSet_1.adapterNotSet);
    test("it should not allow an adapter that does not implement the interface", brokenAdapter_1.brokenAdapter);
}
exports.utilsValidationsValidateAdapterTesting = utilsValidationsValidateAdapterTesting;
