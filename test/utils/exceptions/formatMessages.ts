import { Exceptions } from "../../../src/utils/exceptions";
export function formatMessages() {
    let output = Exceptions.view("title", "one", "two", "three");
    expect(output).toBe(`| title\n| --------------------------------\n| one\n| two\n| three`);
}
