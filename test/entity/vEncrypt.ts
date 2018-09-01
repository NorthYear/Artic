import { Article } from "../model";
export function vEncrypt() {
    let encrypted = Article.vNew({
        title: "title",
        content: "content"
    }).vEncrypt(process.env.API_SHARED_KEY);
    expect(encrypted.indexOf(":")).toBe(32);
}
