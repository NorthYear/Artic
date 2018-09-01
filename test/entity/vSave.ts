import { Article, mainDB } from "../model";
export function vSave(done) {
    let article = Article.vNew({
        title: "title",
        content: "content"
    }).vSave(mainDB).then(article => {
        expect(typeof article.id).toBe("string");
        expect(article.created).toBeInstanceOf(Date);
        expect(article.updated).toBeInstanceOf(Date);
        expect(article.title).toBe("title");
        expect(article.content).toBe("content");
        done();
    });
}
