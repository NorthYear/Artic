import { appendDateToContext } from "./appendDateToContext";
import { newContext } from "./newContext";

export function utilsValidationValidateContext() {
    test("it should append Date to the context provided", appendDateToContext)
    test("is should create a new context and append Date to context", newContext)
}
