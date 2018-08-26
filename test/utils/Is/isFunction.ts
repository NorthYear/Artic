import { Is } from "../../../src/utils/is";

export function isFunction() {
    expect(Is.fn("")).toBe(false);
    expect(Is.fn(false)).toBe(false);
    expect(Is.fn(() => { })).toBe(true);
    expect(Is.fn([])).toBe(false);
    expect(Is.fn({})).toBe(false);
    expect(Is.fn(undefined)).toBe(false);
    expect(Is.fn(null)).toBe(false);
    expect(Is.fn(new Error)).toBe(false);
}