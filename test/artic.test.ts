import "jest";
require("dotenv").config();
import { utilsIsTesting } from "./utils/Is/testing";
import { utilsExceptionsTesting } from "./utils/exceptions/testing";
import { utilsCryptoboxTesting } from "./utils/cryptobox/testing";
import { utilsSerializerTesting } from "./utils/serializer/testing";
import { utilsValidationsTesting } from "./utils/validations/testing";
import { utilsBranderTesting } from "./utils/brander/testing";

describe("Utils", () => {
    describe("Is", utilsIsTesting)
    describe("Exceptions", utilsExceptionsTesting);
    describe("Cryptobox", utilsCryptoboxTesting);
    describe("Serializer", utilsSerializerTesting);
    describe("Brander", utilsBranderTesting);
    describe("Validations", utilsValidationsTesting);
})
