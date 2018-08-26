import { Is } from "../../../src/utils/is";

export function isBool() {
    expect(Is.bool("")).toBe(false);
    expect(Is.bool(false)).toBe(true);
    expect(Is.bool(() => { })).toBe(false);
    expect(Is.bool([])).toBe(false);
    expect(Is.bool({})).toBe(false);
    expect(Is.bool(undefined)).toBe(false);
    expect(Is.bool(null)).toBe(false);
    expect(Is.bool(new Error)).toBe(false);
}