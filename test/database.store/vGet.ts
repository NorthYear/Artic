import { Article, mainDB } from "../model";
export function vGet(done) {
    Article.vStore("get_namespace").vSet(mainDB, "name", "something").then(() => {
        Article.vStore("get_namespace").vGet(mainDB, "name").then(name => {
            expect(name).toBe("something");
            done();
        });
    });
}
