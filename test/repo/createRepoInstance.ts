import { Repo } from "../../src";
import { RepoInstance } from "../../src/repo.instance";
export function createRepoInstance() {
    expect(Repo<string>([])).toBeInstanceOf(RepoInstance);
}
