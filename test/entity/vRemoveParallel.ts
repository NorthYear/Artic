import { Article, allDB } from "../model";
export function vRemoveParallel(done) {
    Article.vNew({
        title: "title",
        content: "content"
    }).vSave(allDB).then(article => {
        article.vRemove(allDB).then(() => {
            done();
        });
    });
}
