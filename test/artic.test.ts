import "jest";
require("dotenv").config();
import { utilsIsTesting } from "./utils/Is/testing";
import { utilsExceptionsTesting } from "./utils/exceptions/testing";
import { utilsCryptoboxTesting } from "./utils/cryptobox/testing";
import { utilsSerializerTesting } from "./utils/serializer/testing";

describe("Utils", () => {
    describe("Is", utilsIsTesting)
    describe("Exceptions", utilsExceptionsTesting);
    describe("Cryptobox", utilsCryptoboxTesting);
    describe("Serializer", utilsSerializerTesting);
})
