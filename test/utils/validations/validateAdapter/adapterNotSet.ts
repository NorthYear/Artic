import { Validations } from "../../../../src/utils/validations";
export function adapterNotSet() {
    Validations.validateAdapter({
        adapter: null
    });
}
