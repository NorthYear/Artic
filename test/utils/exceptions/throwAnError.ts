import { Exceptions } from "../../../src/utils/exceptions";
export function throwAnError() {
    expect(() => {
        Exceptions.articError(`Whoa!! You can't do that.`, `There is extra information you need to know about`);
    }).toThrow();
}
