import { Is } from "../../../src/utils/is";

export function isNotNil() {
    expect(Is.notNil("")).toBe(true);
    expect(Is.notNil(false)).toBe(true);
    expect(Is.notNil(() => { })).toBe(true);
    expect(Is.notNil([])).toBe(true);
    expect(Is.notNil({})).toBe(true);
    expect(Is.notNil(undefined)).toBe(false);
    expect(Is.notNil(null)).toBe(false);
    expect(Is.notNil(new Error)).toBe(true);
}