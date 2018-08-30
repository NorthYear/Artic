import { Brander } from "../../../src/utils/brander";
export function failWithoutAName() {
    expect(() => {
        Brander.getClassName("");
    }).toThrow();
}
