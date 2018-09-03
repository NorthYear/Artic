"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./validateAdapter/testing");
var validations_1 = require("../../../src/utils/validations");
var testing_2 = require("./validateEncryptionKey/testing");
var testing_3 = require("./validateContext/testing");
var testing_4 = require("./validateHashes/testing");
var testing_5 = require("./ensureDatabaseLike/testing");
var testing_6 = require("./ensureDatabase/testing");
function utilsValidationsTesting() {
    describe("Validate Adapter", testing_1.utilsValidationsValidateAdapterTesting);
    describe("Validate Encryption Key", testing_2.utilsValidationsValidateEncryptionKey);
    describe("Validate Context", testing_3.utilsValidationValidateContext);
    describe("Validate Hash Options", testing_4.utilsValidationsValidateHashes);
    describe("Validate Database Like", testing_5.utilsValidationsEnsureDatabaseLike);
    describe("Validate Database", testing_6.utilsValidationsEnsureDatabase);
    test("it should be able to validate options", function () {
        validations_1.Validations.validateOptions({});
        validations_1.Validations.validateOptions({}, "Name");
    });
}
exports.utilsValidationsTesting = utilsValidationsTesting;
