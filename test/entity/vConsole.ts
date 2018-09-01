import { Article } from "../model";
export function vConsole(done) {
    let dir = jest.spyOn(console, "dir").mockImplementationOnce(() => {
        done();
    });
    Article.vNew({
        title: "title",
        content: "content"
    }).vConsole();
    expect(dir).toBeCalled();
}
