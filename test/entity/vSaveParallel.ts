import { Article, allDB } from "../model";
export function vSaveParallel(done) {
    let article = Article.vNew({
        title: "title",
        content: "content"
    }).vSave(allDB).then(article => {
        expect(typeof article.id).toBe("string");
        expect(article.created).toBeInstanceOf(Date);
        expect(article.updated).toBeInstanceOf(Date);
        expect(article.title).toBe("title");
        expect(article.content).toBe("content");
        done();
    });
}
