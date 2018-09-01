import { Article, mainDB } from "../model";
export function vHasParallel(done) {
    Article.vStore("names").vSet(mainDB, "name", "something").then(() => {
        Article.vStore("names").vHas(mainDB, "name").then(bool => {
            expect(bool).toBe(true);
            done();
        });
    });
}
