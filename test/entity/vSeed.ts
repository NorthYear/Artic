import { Article } from "../model";
export function vSeed() {
    let finalList = Article.vSeed(10, article => {
        article.title = "title";
        article.content = "content";
    }).map(article => {
        expect(article.id).toBe(undefined);
        expect(article.created).toBe(undefined);
        expect(article.updated).toBe(undefined);
        expect(article.title).toBe("title");
        expect(article.content).toBe("content");
        return article;
    });
    expect(finalList.length).toBe(10);
}
