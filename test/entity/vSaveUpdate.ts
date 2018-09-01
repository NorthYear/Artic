import { Article, mainDB } from "../model";
export function vSaveUpdate(done) {
    let article = Article.vNew({
        title: "title",
        content: "content"
    }).vSave(mainDB).then(article => {
        article.title = "something-else";
        article.vSave(mainDB).then(article => {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(article.title).toBe("something-else");
            expect(article.content).toBe("content");
            done();
        });
    });
}
