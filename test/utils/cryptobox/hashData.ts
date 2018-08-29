import { Cryptobox } from "../../../src/utils/cryptobox";
export function hashData() {
    let hash = Cryptobox.hash("something");
    expect(hash.length).toBe(64);
    expect(hash).toBe("3fc9b689459d738f8c88a3a48aa9e33542016b7a4052e001aaa536fca74813cb");
}
