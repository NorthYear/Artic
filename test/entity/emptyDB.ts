import { mainDB, Article } from "../model";
export function emptyDB(done) {
    mainDB.empty().then(() => {
        Article.vCount(mainDB).then(count => {
            expect(count).toBe(0);
            done();
        });
    });
}
