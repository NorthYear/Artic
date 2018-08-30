import { DatabaseToolingDecorators } from "../../src/database.tooling";
import { Serializer } from "../../src/utils/serializer";
export function unserializeEncrypted() {
    class User {
        name: string;
    }
    let options = { encryptionKey: process.env.ENCRYPTION_KEY };
    var serializer = new Serializer({ User }, "");
    let userString = DatabaseToolingDecorators.serialize(options, serializer)(new User);
    let instance = DatabaseToolingDecorators.unserialize(options, serializer)(userString);
    expect(instance).toBeInstanceOf(User);
}
