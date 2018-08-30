import { Brander } from "../../../src/utils/brander";
export function getClassNameFromConstructor() {
    class User {
    }
    expect(Brander.getClassName(User)).toBe("User");
}
