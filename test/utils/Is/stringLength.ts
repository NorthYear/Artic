import { Is } from "../../../src/utils/is";

export function stringLength() {
    expect(Is.strLength("123456789", 9)).toBe(true);
    expect(Is.strLength("123", 3)).toBe(true);
    expect(Is.strLength("1234", 3)).toBe(false);
    expect(Is.strLength("1", 2)).toBe(false);
}