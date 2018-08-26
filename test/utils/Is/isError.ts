import { Is } from "../../../src/utils/is";
//string
//boolean
//function
//array
//object
//undefined
//null
//error
export function isError() {
    expect(Is.err("")).toBe(false);
    expect(Is.err(false)).toBe(false);
    expect(Is.err(() => { })).toBe(false);
    expect(Is.err([])).toBe(false);
    expect(Is.err({})).toBe(false);
    expect(Is.err(undefined)).toBe(false);
    expect(Is.err(null)).toBe(false);
    expect(Is.err(new Error)).toBe(true);
}