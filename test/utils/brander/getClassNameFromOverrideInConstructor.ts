import { Brander } from "../../../src/utils/brander";
export function getClassNameFromOverrideInConstructor() {
    class User {
        static vEntityName: string = "users";
    }
    expect(Brander.getClassName(User)).toBe("users");
}
