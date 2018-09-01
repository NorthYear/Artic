import { Article } from "../model";
export function vMapEncrypt() {
    let encrypted = Article.vNew({
        title: "title",
        content: "content"
    }).vMapEncrypt(process.env.API_SHARED_KEY, article => {
        return {
            name: article.title
        };
    });
    expect(encrypted.indexOf(":")).toBe(32);
}
