import { Article, mainDB } from "../model";
export function vRemove(done) {
    Article.vStore("remove_namespace")
        .vSet(mainDB, "name", "something to remove")
        .then(() => {
            Article.vStore("remove_namespace").vHas(mainDB, "name").then(bool => {
                expect(bool).toBe(true);
                Article.vStore("remove_namespace").vRemove(mainDB, "name").then(() => {
                    Article.vStore("remove_namespace").vHas(mainDB, "name").then(bool => {
                        expect(bool).toBe(false);
                        done();
                    });
                });
            });
        });
}
