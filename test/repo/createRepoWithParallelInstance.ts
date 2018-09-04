import { Repo } from "../../src";
import { RepoInstance } from "../../src/repo.instance";
import { allDB } from "../model";
export function createRepoWithParallelInstance() {
    expect(Repo<string>([], allDB)).toBeInstanceOf(RepoInstance);
}
