import { adapter } from "./testing";
export function empty(done) {
    adapter.empty().then(() => {
        adapter.count("main/user").then(count => {
            expect(count).toBe(0);
            done();
        });
    });
}
