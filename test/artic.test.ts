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
import { databaseToolingTesting } from "./database.tooling/testing";
import { databaseEventStoreTesting } from "./database.event.store/testing";
import { adaptersDevAdapterTesting } from "./adapters/dev.adapter/testing";
import { entityTesting } from "./entity/testing";
import { databaseStoreTesting } from "./database.store/testing";
import { repoTesting } from "./repo/testing";

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
    describe("Database Tooling", databaseToolingTesting);
    describe("Database Event Store", databaseEventStoreTesting);
})

describe("Adapters", () => {
    describe("DevAdapter", adaptersDevAdapterTesting);
})

describe("Entity", entityTesting)

describe("Database Store", databaseStoreTesting);

describe("Repo", repoTesting);
