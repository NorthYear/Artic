import { Exceptions } from "../../../src/utils/exceptions";
export function consoleWarn(done) {
    let warn = jest.spyOn(console, "warn").mockImplementationOnce(() => {
        done();
    })
    Exceptions.articWarning(`Whoa!! You can't do that.`, `There is extra information you need to know about`);
    expect(warn).toBeCalled();
}
