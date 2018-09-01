import { Article, copyDB } from "../model";
export function vClose(done) {
    Article.vClose(copyDB).then(() => {
        done();
    });
}
