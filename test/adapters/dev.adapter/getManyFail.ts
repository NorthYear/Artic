import { adapter } from "./testing";
export function getManyFail(done) {
    adapter.getMany("main/user", ["654654987654", "65", "1"]).catch(err => {
        done();
    });
}
