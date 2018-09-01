import { Article, allDB } from "../model";
export function vCloseParallel(done) {
    Article.vClose(allDB).then(() => {
        done();
    });
}
