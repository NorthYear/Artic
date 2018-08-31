import { adapter } from "./testing";
export function put(done) {
    adapter.put("main/user", "1", "user-data-for-1").then(() => {
        adapter.has("main/user", "1").then(bool => {
            expect(bool).toBe(true);
            done();
        })
    });
}
