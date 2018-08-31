import { isBool } from "./isBool";
import { stringLength } from "./stringLength";
import { isString } from "./isString";
import { isFunction } from "./isFunction";
import { isArray } from "./isArray";
import { isObject } from "./isObject";
import { isNil } from "./isNil";
import { isNotNil } from "./isNotNil";
import { getType } from "./getType";
import { isError } from "./isError";
import { isHtml } from "./isHtml";
import { isDatabaseInstance } from "./isDatabaseInstance";
import { isParallelDatabaseInstance } from "./isParallelDatabaseInstance";
import { isDatabaseInstanceLike } from "./isDatabaseInstanceLike";


export function utilsIsTesting() {
    test("it should be able to determine if a variable is an error", isError);
    test("it should be able to determine if a variable is a string", isString)
    test("it should be able to determine if a variable has a particular string length", stringLength);
    test("it should be able to determine if a variable is a boolean value", isBool);
    test("it should be able to determine if a variable is a function", isFunction);
    test("it should be able to determine if a variable is an array", isArray);
    test("it should be able to determine if a variable is an obj", isObject);
    test("it should be able to determine if a variable is null or undefined", isNil);
    test("it should be able to determine if a varialbe is not a nil value", isNotNil);
    test("it should be able to determine the type of a variable", getType);
    test("it should be able to determine if a string contains html", isHtml);
    test("it should be able to determine if a variable is a database instance", isDatabaseInstance);
    test("it should be able to determine if a variable is a parallel database instance", isParallelDatabaseInstance);
    test("it should be able to determine if a variable is database instance like", isDatabaseInstanceLike)
}
