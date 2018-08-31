import { DevAdapter } from "../../../src/adapters/dev.adapter";
import { putMany } from "./putMany";
import { get } from "./get";
import { put } from "./put";
import { close } from "./close";
import { open } from "./open";
import { properSetup } from "./properSetup";
import { remove } from "./remove";
import { removeMany } from "./removeMany";
import { getMany } from "./getMany";
import { getFail } from "./getFail";
import { emptyNamespace } from "./emptyNamespace";
import { count } from "./count";
import { all } from "./all";
import { getManyFail } from "./getManyFail";
import { stream } from "./stream";
import { logRecord } from "./logRecord";
import { logAction } from "./logAction";
import { empty } from "./empty";

export var adapter = new DevAdapter();
adapter.quiet = true;
export var consoleAdapter = new DevAdapter();


export function adaptersDevAdapterTesting() {
    test("it should be able to be set up properly", properSetup)
    test("it should be able to open", open)
    test("it should be able to close", close);
    test("it should be able to put", put)
    test("it should be able to put many", putMany);
    test("it should be able to count", count);
    test("it should be able to get", get);
    test("it should fail when trying to get a record that does not exist", getFail)
    test("it should be able to get many", getMany);
    test("it should fail when trying to get many records that do not exist", getManyFail)
    test("it should be able to remove", remove)
    test("it should be able to remove many", removeMany);
    test("it should be able to get all", all)
    test("it should be able to stream", stream)
    test("it should be able to empty namespace", emptyNamespace);
    test("is should be able to log an action", logAction);
    test("it should be able to log record", logRecord);
    test("it should be able to empty store", empty);
}
