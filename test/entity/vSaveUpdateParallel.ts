import { Article, allDB } from "../model";
export function vSaveUpdateParallel(done) {
    let article = Article.vNew({
        title: "title",
        content: "content"
    }).vSave(allDB).then(article => {
        article.title = "something-else";
        article.vSave(allDB).then(article => {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(article.title).toBe("something-else");
            expect(article.content).toBe("content");
            done();
        });
    });
}
