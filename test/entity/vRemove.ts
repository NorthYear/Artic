import { Article, mainDB } from "../model";
export function vRemove(done) {
    Article.vNew({
        title: "title",
        content: "content"
    }).vSave(mainDB).then(article => {
        article.vRemove(mainDB).then(() => {
            done();
        });
    });
}
