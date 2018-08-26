import { Is } from "../../../src/utils/is";

export function isString() {
    expect(Is.str("")).toBe(true);
    expect(Is.str(false)).toBe(false);
    expect(Is.str(() => { })).toBe(false);
    expect(Is.str([])).toBe(false);
    expect(Is.str({})).toBe(false);
    expect(Is.str(undefined)).toBe(false);
    expect(Is.str(null)).toBe(false);
    expect(Is.str(new Error)).toBe(false);
}