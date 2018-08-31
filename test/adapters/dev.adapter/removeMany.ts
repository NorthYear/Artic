import { adapter } from "./testing";
export function removeMany(done) {
    adapter.removeMany("main/user", ["51", "52"]).then(() => {
        Promise.all([
            adapter.has("main/user", "51"),
            adapter.has("main/user", "52")
        ]).then(bools => {
            expect(bools[0]).toBe(false);
            expect(bools[1]).toBe(false);
            done();
        });
    });
}
