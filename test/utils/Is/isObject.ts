import { Is } from "../../../src/utils/is";

export function isObject() {
    expect(Is.obj("")).toBe(false);
    expect(Is.obj(false)).toBe(false);
    expect(Is.obj(() => { })).toBe(false);
    expect(Is.obj([])).toBe(false);
    expect(Is.obj({})).toBe(true);
    expect(Is.obj(undefined)).toBe(false);
    expect(Is.obj(null)).toBe(false);
    expect(Is.obj(new Error)).toBe(false);
}