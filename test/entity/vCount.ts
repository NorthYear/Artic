import { Article, mainDB } from "../model";
export function vCount(done) {
    Article.vCount(mainDB).then(count => {
        expect(typeof count).toBe("number");
        expect(count).toBe(4);
        done();
    });
}
