import { Brander } from "../../../src/utils/brander";
export function getClassNameFromOverrideInstance() {
    class User {
        static vEntityName: string = "users";
    }
    expect(Brander.getClassName(new User)).toBe("users");
}
