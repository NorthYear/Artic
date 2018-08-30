import "jest";
require("dotenv").config();
import { utilsIsTesting } from "./utils/Is/testing";
import { utilsExceptionsTesting } from "./utils/exceptions/testing";
import { utilsCryptoboxTesting } from "./utils/cryptobox/testing";
import { utilsSerializerTesting } from "./utils/serializer/testing";
import { utilsValidationsTesting } from "./utils/validations/testing";
import { utilsBranderTesting } from "./utils/brander/testing";
import { databaseTesting } from "./database/testing";
import { databaseParallelInstanceTesting } from "./database.parallel.instance/testing";

describe("Utils", () => {
    describe("Is", utilsIsTesting)
    describe("Exceptions", utilsExceptionsTesting);
    describe("Cryptobox", utilsCryptoboxTesting);
    describe("Serializer", utilsSerializerTesting);
    describe("Brander", utilsBranderTesting);
    describe("Validations", utilsValidationsTesting);
})

describe("Database", () => {
    describe("Database", databaseTesting);
    describe("Database Parallel Instance", databaseParallelInstanceTesting);
})
