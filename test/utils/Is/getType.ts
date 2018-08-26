import { Is } from "../../../src/utils/is";

export function getType() {
    expect(Is.type("")).toBe("string");
    expect(Is.type(false)).toBe("boolean");
    expect(Is.type(() => { })).toBe("function");
    expect(Is.type([])).toBe("array");
    expect(Is.type({})).toBe("object");
    expect(Is.type(undefined)).toBe("nil");
    expect(Is.type(null)).toBe("nill");
    expect(Is.type(new Error)).toBe("object");
}