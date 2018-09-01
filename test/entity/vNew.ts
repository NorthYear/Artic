import { Article } from "../model";

export function vNew() {
    let article = Article.vNew({
        title: "title",
        content: "content"
    });
    expect(article.id).toBe(undefined);
    expect(article.created).toBe(undefined);
    expect(article.updated).toBe(undefined);
    expect(article.title).toBe("title");
    expect(article.content).toBe("content");

    let article2 = Article.vNew();
    expect(article2.id).toBe(undefined);
    expect(article2.created).toBe(undefined);
    expect(article2.updated).toBe(undefined);
    expect(article2.title).toBe(undefined);
    expect(article2.content).toBe(undefined);
}
