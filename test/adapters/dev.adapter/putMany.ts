import { adapter } from "./testing";
export function putMany(done) {
    let records = []
    for (let i = 2; i <= 100; i++) {
        records.push({
            key: i.toString(),
            value: "user-data-for-" + i.toString()
        })
    }
    adapter.putMany("main/user", records).then(() => {
        Promise.all([
            adapter.has("main/user", "2").then(bool => {
                expect(bool).toBe(true);
            }),
            adapter.has("main/user", "100").then(bool => {
                expect(bool).toBe(true);
            })
        ]).then((bools) => {
            done();
        })
    });
}
