import { Repo } from "../../src";
import { RepoInstance } from "../../src/repo.instance";
import { mainDB } from "../model";
export function createRepoInstanceWithDBInstance() {
    expect(Repo<string>([], mainDB)).toBeInstanceOf(RepoInstance);
}
