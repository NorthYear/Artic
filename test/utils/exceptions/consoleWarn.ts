import { Exceptions } from "../../../src/utils/exceptions";
export function consoleWarn() {
    let warn = jest.spyOn(console, "warn").mockImplementation();
    Exceptions.articWarning(`Whoa!! You can't do that.`, `There is extra information you need to know about`);
    expect(warn).toBeCalled();
}
