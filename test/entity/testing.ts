import { vNew } from "./vNew";
import { vSeed } from "./vSeed";
import { vEvents } from "./vEvents";
import { vEventsParallel } from "./vEventsParallel";
import { vAll } from "./vAll";
import { vAllParallel } from "./vAllParallel";
import { vSave } from "./vSave";
import { vSaveParallel } from "./vSaveParallel";
import { vSaveUpdate } from "./vSaveUpdate";
import { vSaveUpdateParallel } from "./vSaveUpdateParallel";
import { vStreamParallel } from "./vStreamParallel";
import { vStream } from "./vStream";
import { vCopyAllProgress } from "./vCopyAllProgress";
import { vCount } from "./vCount";
import { vCountParallel } from "./vCountParallel";
import { vCopyAll } from "./vCopyAll";
import { vCloseParallel } from "./vCloseParallel";
import { vClose } from "./vClose";
import { vEmptyParallel } from "./vEmptyParallel";
import { vEmpty } from "./vEmpty";
import { vSaveMany } from "./vSaveMany";
import { vSaveManyParallel } from "./vSaveManyParallel";
import { vSaveManyUpdate } from "./vSaveManyUpdate";
import { vSaveManyUpdateParallel } from "./vSaveManyUpdateParallel";
import { vFind } from "./vFind";
import { vFindParallel } from "./vFindParallel";
import { vFindMany } from "./vFindMany";
import { vFindManyParallel } from "./vFindManyParallel";
import { vRemoveMany } from "./vRemoveMany";
import { vRemoveManyParallel } from "./vRemoveManyParallel";
import { vHas } from "./vHas";
import { vHasParallel } from "./vHasParallel";
import { failRemoveRecord } from "./failRemoveRecord";
import { vRemoveParallel } from "./vRemoveParallel";
import { vRemove } from "./vRemove";
import { vInject } from "./vInject";
import { vJson } from "./vJson";
import { vMap } from "./vMap";
import { vMapJson } from "./vMapJson";
import { vEncrypt } from "./vEncrypt";
import { vConsole } from "./vConsole";
import { vMapEncrypt } from "./vMapEncrypt";
import { vStore } from "./vStore";

export function entityTesting() {
    test("it should be able to make an instance", vNew);
    test("it should be able to seed instances", vSeed);
    test("it should be able to subscribe to events", vEvents);
    test("it should be able to subscribe to event on a parallel db instance", vEventsParallel);
    test("it should be able to save a record", vSave);
    test("it should be able to save a record on parallel db instance", vSaveParallel);
    test("it should be able to update a record", vSaveUpdate);
    test("it should be able to update a record on a parallel db instance", vSaveUpdateParallel);
    test("it should be able to get all", vAll);
    test("it should be able to get all from parallel db instance", vAllParallel);
    test("it should be able to stream", vStream);
    test("it should be able to stream from a parallel instance", vStreamParallel);
    test("it should be able to count the number of records for a namespace in database", vCount);
    test("it should be able to count the number or records for a namespace in a paralllel db instance", vCountParallel)
    test("it should be able to copy all records for a namespace from one db to another", vCopyAll);
    test("it should be able to copy all with progress handler", vCopyAllProgress);
    test("it should be able to close namespace for a database instance", vClose);
    test("it should be able to close namespace for a parallel database instance", vCloseParallel);
    test("it should be able to empty namespace in a database instance", vEmpty);
    test("it should be able to empty namespace in a parallel databaseinstance", vEmptyParallel);
    test("it should be able to save many records", vSaveMany);
    test("it should be able to save many in database parallel", vSaveManyParallel);
    test("it should be able to save many records", vSaveManyUpdate);
    test("it should be able to save many in database parallel", vSaveManyUpdateParallel);
    test("it should be able to to find a record by id", vFind);
    test("it should be able to find a record by id in parallel instance", vFindParallel);
    test("it should be able to find many", vFindMany);
    test("it should be able to find many from parallel instance", vFindManyParallel);
    test("it should be able to determine if a record exists", vHas);
    test("it should be able to determine if a record exists with parallel instance", vHasParallel)
    test("it should be able to remove one", vRemove);
    test("it should be able to remove from parallel instance", vRemoveParallel);
    test("it should fail to remove a record that does not exist", failRemoveRecord);
    test("it should be able to remove many", vRemoveMany);
    test("it should be able to remove many from parallel instance", vRemoveManyParallel);
    test("it should be to inject", vInject)
    test("it should be able to json stringify", vJson)
    test("it should be able to map", vMap);
    test("it should be able to map and json stringify", vMapJson)
    test("it should be able to encrypt", vEncrypt);
    test("it should be able to console", vConsole);
    test("it should be able to map, json and ecrypt", vMapEncrypt);
    test("it should be able to create a database store", vStore)
}