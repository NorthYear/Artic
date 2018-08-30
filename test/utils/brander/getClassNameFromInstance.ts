import { Brander } from "../../../src/utils/brander";
export function getClassNameFromInstance() {
    class User {
    }
    expect(Brander.getClassName(new User)).toBe("User");
}
