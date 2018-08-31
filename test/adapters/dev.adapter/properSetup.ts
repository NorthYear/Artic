import { adapter, consoleAdapter } from "./testing";
export function properSetup() {
    expect(typeof adapter.store).toBe("object");
    expect(adapter.store !== null).toBe(true);
    expect(consoleAdapter.quiet).toBe(false);
    expect(adapter.quiet).toBe(true);
}
