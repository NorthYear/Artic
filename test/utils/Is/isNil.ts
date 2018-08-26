import { Is } from "../../../src/utils/is";

export function isNil() {
    expect(Is.nil("")).toBe(false);
    expect(Is.nil(false)).toBe(false);
    expect(Is.nil(() => { })).toBe(false);
    expect(Is.nil([])).toBe(false);
    expect(Is.nil({})).toBe(false);
    expect(Is.nil(undefined)).toBe(true);
    expect(Is.nil(null)).toBe(true);
    expect(Is.nil(new Error)).toBe(false);
}