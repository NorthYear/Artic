import { Article, allDB } from "../model";
export function vRemoveParallel(done) {
    Article.vStore("remove_namespace")
        .vSet(allDB, "name", "something to remove")
        .then(() => {
            Article.vStore("remove_namespace").vHas(allDB, "name").then(bool => {
                expect(bool).toBe(true);
                Article.vStore("remove_namespace").vRemove(allDB, "name").then(() => {
                    Article.vStore("remove_namespace").vHas(allDB, "name").then(bool => {
                        expect(bool).toBe(false);
                        done();
                    });
                });
            });
        });
}
