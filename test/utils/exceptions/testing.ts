import "jest";
import { formatMessages } from "./formatMessages";
import { throwAnError } from "./throwAnError";
import { consoleWarn } from "./consoleWarn";
import { nonErrorPass } from "./nonErrorPass";


export function utilsExceptionsTesting() {
    test("it should be able to format messages", formatMessages);
    test("it should be able to throw an error", throwAnError);
    test("it should be able to console warn", consoleWarn);
    test("it should allow non-errors to pass through", nonErrorPass);
}
