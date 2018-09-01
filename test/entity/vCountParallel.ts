import { Article, allDB } from "../model";
export function vCountParallel(done) {
    Article.vCount(allDB).then(count => {
        expect(typeof count).toBe("number");
        expect(count).toBe(4);
        done();
    });
}
