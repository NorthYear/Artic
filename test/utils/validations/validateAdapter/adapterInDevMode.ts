import { Validations } from "../../../../src/utils/validations";
export function adapterInDevMode(done) {
    let warn = jest.spyOn(console, "warn").mockImplementationOnce(() => done());
    Validations.validateAdapter({
        adapter: this,
        devMode: true
    });
    expect(warn).toBeCalled();
}
