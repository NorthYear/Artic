"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
require("dotenv").config();
var testing_1 = require("./utils/Is/testing");
var testing_2 = require("./utils/exceptions/testing");
var testing_3 = require("./utils/cryptobox/testing");
var testing_4 = require("./utils/serializer/testing");
var testing_5 = require("./utils/validations/testing");
var testing_6 = require("./utils/brander/testing");
var testing_7 = require("./database/testing");
var testing_8 = require("./database.parallel.instance/testing");
var testing_9 = require("./database.tooling/testing");
var testing_10 = require("./database.event.store/testing");
var testing_11 = require("./adapters/dev.adapter/testing");
var testing_12 = require("./entity/testing");
var testing_13 = require("./database.store/testing");
var testing_14 = require("./repo/testing");
describe("Utils", function () {
    describe("Is", testing_1.utilsIsTesting);
    describe("Exceptions", testing_2.utilsExceptionsTesting);
    describe("Cryptobox", testing_3.utilsCryptoboxTesting);
    describe("Serializer", testing_4.utilsSerializerTesting);
    describe("Brander", testing_6.utilsBranderTesting);
    describe("Validations", testing_5.utilsValidationsTesting);
});
describe("Database", function () {
    describe("Database", testing_7.databaseTesting);
    describe("Database Parallel Instance", testing_8.databaseParallelInstanceTesting);
    describe("Database Tooling", testing_9.databaseToolingTesting);
    describe("Database Event Store", testing_10.databaseEventStoreTesting);
});
describe("Adapters", function () {
    describe("DevAdapter", testing_11.adaptersDevAdapterTesting);
});
describe("Entity", testing_12.entityTesting);
describe("Database Store", testing_13.databaseStoreTesting);
describe("Repo", testing_14.repoTesting);
