import { Article, allDB } from "../model";
export function vGetParallel(done) {
    Article.vStore("get_namespace").vSet(allDB, "name", "something").then(() => {
        Article.vStore("get_namespace").vGet(allDB, "name").then(name => {
            expect(name).toBe("something");
            done();
        });
    });
}
