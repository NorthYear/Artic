import { adapter } from "./testing";
export function getFail(done) {
    adapter.get("main/user", "654654987654").catch(err => {
        done();
    });
}
