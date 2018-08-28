import { Exceptions } from "../../../src/utils/exceptions";
export function nonErrorPass() {
    expect(() => {
        Exceptions.error(null);
    }).not.toThrow();
}
