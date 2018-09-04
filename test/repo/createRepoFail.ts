import { Repo } from "../../src";
export function createRepoFail() {
    expect(() => {
        Repo<string>([], this)
    }).toThrow();
}
