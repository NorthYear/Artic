import { Is } from "../../../src/utils/is";

export function isArray() {
    expect(Is.arr("")).toBe(false);
    expect(Is.arr(false)).toBe(false);
    expect(Is.arr(() => { })).toBe(false);
    expect(Is.arr([])).toBe(true);
    expect(Is.arr({})).toBe(false);
    expect(Is.arr(undefined)).toBe(false);
    expect(Is.arr(null)).toBe(false);
    expect(Is.arr(new Error)).toBe(false);
}