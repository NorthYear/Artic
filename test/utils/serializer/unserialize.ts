import { Serializer } from "../../../src/utils/serializer";
import { Something } from "./Something";

export function unserialize() {
    let serializer = new Serializer({ Something, Date }, "namespace");
    let instance = new Something;
    instance.title = "title";
    instance.content = "content";
    let string = serializer.stringify(instance);
    let i = serializer.parse<Something>(string);
    expect(i).toBeInstanceOf(Something);
}
