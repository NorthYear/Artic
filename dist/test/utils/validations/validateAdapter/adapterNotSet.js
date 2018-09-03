"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function adapterNotSet() {
    validations_1.Validations.validateAdapter({
        adapter: null
    });
}
exports.adapterNotSet = adapterNotSet;
