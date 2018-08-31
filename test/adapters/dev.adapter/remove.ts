import { adapter } from "./testing";
export function remove(done) {
    adapter.remove("main/user", "50").then(() => {
        adapter.has("main/user", "50").then(bool => {
            expect(bool).toBe(false);
            done();
        });
    });
}
