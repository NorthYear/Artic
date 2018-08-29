import { Validations } from "../../../../src/utils/validations";
import { badAdapter } from "./badAdapter";
export function brokenAdapter(done) {
    let warn = jest.spyOn(console, "warn").mockImplementationOnce(() => {
        done()
    });
    Validations.validateAdapter({
        adapter: badAdapter()
    });
    expect(warn).toBeCalled();
}
