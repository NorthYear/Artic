import "jest";
import { utilsIsTesting } from "./utils/Is/testing";
import { utilsExceptionsTesting } from "./utils/exceptions/testing";

describe("Utils", () => {
    describe("Is", utilsIsTesting)
    describe("Exceptions", utilsExceptionsTesting);
})
