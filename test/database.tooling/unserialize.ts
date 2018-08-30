import { DatabaseToolingDecorators } from "../../src/database.tooling";
import { Serializer } from "../../src/utils/serializer";
export function unserialize() {
    class User {
        name: string;
    }
    let options = { encryptionKey: null };
    var serializer = new Serializer({ User }, "");
    let userString = DatabaseToolingDecorators.serialize(options, serializer)(new User);
    let instance = DatabaseToolingDecorators.unserialize(options, serializer)(userString);
    expect(instance).toBeInstanceOf(User);
}
