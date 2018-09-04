"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vNew_1 = require("./vNew");
var vSeed_1 = require("./vSeed");
var vEvents_1 = require("./vEvents");
var vEventsParallel_1 = require("./vEventsParallel");
var vAll_1 = require("./vAll");
var vAllParallel_1 = require("./vAllParallel");
var vSave_1 = require("./vSave");
var vSaveParallel_1 = require("./vSaveParallel");
var vSaveUpdate_1 = require("./vSaveUpdate");
var vSaveUpdateParallel_1 = require("./vSaveUpdateParallel");
var vStreamParallel_1 = require("./vStreamParallel");
var vStream_1 = require("./vStream");
var vCopyAllProgress_1 = require("./vCopyAllProgress");
var vCount_1 = require("./vCount");
var vCountParallel_1 = require("./vCountParallel");
var vCopyAll_1 = require("./vCopyAll");
var vCloseParallel_1 = require("./vCloseParallel");
var vClose_1 = require("./vClose");
var vEmptyParallel_1 = require("./vEmptyParallel");
var vEmpty_1 = require("./vEmpty");
var vSaveMany_1 = require("./vSaveMany");
var vSaveManyParallel_1 = require("./vSaveManyParallel");
var vSaveManyUpdate_1 = require("./vSaveManyUpdate");
var vSaveManyUpdateParallel_1 = require("./vSaveManyUpdateParallel");
var vFind_1 = require("./vFind");
var vFindParallel_1 = require("./vFindParallel");
var vFindMany_1 = require("./vFindMany");
var vFindManyParallel_1 = require("./vFindManyParallel");
var vRemoveMany_1 = require("./vRemoveMany");
var vRemoveManyParallel_1 = require("./vRemoveManyParallel");
var vHas_1 = require("./vHas");
var vHasParallel_1 = require("./vHasParallel");
var failRemoveRecord_1 = require("./failRemoveRecord");
var vRemoveParallel_1 = require("./vRemoveParallel");
var vRemove_1 = require("./vRemove");
var vInject_1 = require("./vInject");
var vJson_1 = require("./vJson");
var vMap_1 = require("./vMap");
var vMapJson_1 = require("./vMapJson");
var vEncrypt_1 = require("./vEncrypt");
var vConsole_1 = require("./vConsole");
var vMapEncrypt_1 = require("./vMapEncrypt");
var vStore_1 = require("./vStore");
var emptyDB_1 = require("./emptyDB");
function entityTesting() {
    test("it should be able to make an instance", vNew_1.vNew);
    test("it should be able to seed instances", vSeed_1.vSeed);
    test("it should be able to subscribe to events", vEvents_1.vEvents);
    test("it should be able to subscribe to event on a parallel db instance", vEventsParallel_1.vEventsParallel);
    test("it should be able to save a record", vSave_1.vSave);
    test("it should be able to save a record on parallel db instance", vSaveParallel_1.vSaveParallel);
    test("it should be able to update a record", vSaveUpdate_1.vSaveUpdate);
    test("it should be able to update a record on a parallel db instance", vSaveUpdateParallel_1.vSaveUpdateParallel);
    test("it should be able to get all", vAll_1.vAll);
    test("it should be able to get all from parallel db instance", vAllParallel_1.vAllParallel);
    test("it should be able to stream", vStream_1.vStream);
    test("it should be able to stream from a parallel instance", vStreamParallel_1.vStreamParallel);
    test("it should be able to count the number of records for a namespace in database", vCount_1.vCount);
    test("it should be able to count the number or records for a namespace in a paralllel db instance", vCountParallel_1.vCountParallel);
    test("it should be able to copy all records for a namespace from one db to another", vCopyAll_1.vCopyAll);
    test("it should be able to copy all with progress handler", vCopyAllProgress_1.vCopyAllProgress);
    test("it should be able to close namespace for a database instance", vClose_1.vClose);
    test("it should be able to close namespace for a parallel database instance", vCloseParallel_1.vCloseParallel);
    test("it should be able to empty namespace in a database instance", vEmpty_1.vEmpty);
    test("it should be able to empty namespace in a parallel databaseinstance", vEmptyParallel_1.vEmptyParallel);
    test("it should be able to save many records", vSaveMany_1.vSaveMany);
    test("it should be able to save many in database parallel", vSaveManyParallel_1.vSaveManyParallel);
    test("it should be able to save many records", vSaveManyUpdate_1.vSaveManyUpdate);
    test("it should be able to save many in database parallel", vSaveManyUpdateParallel_1.vSaveManyUpdateParallel);
    test("it should be able to to find a record by id", vFind_1.vFind);
    test("it should be able to find a record by id in parallel instance", vFindParallel_1.vFindParallel);
    test("it should be able to find many", vFindMany_1.vFindMany);
    test("it should be able to find many from parallel instance", vFindManyParallel_1.vFindManyParallel);
    test("it should be able to determine if a record exists", vHas_1.vHas);
    test("it should be able to determine if a record exists with parallel instance", vHasParallel_1.vHasParallel);
    test("it should be able to remove one", vRemove_1.vRemove);
    test("it should be able to remove from parallel instance", vRemoveParallel_1.vRemoveParallel);
    test("it should fail to remove a record that does not exist", failRemoveRecord_1.failRemoveRecord);
    test("it should be able to remove many", vRemoveMany_1.vRemoveMany);
    test("it should be able to remove many from parallel instance", vRemoveManyParallel_1.vRemoveManyParallel);
    test("it should be to inject", vInject_1.vInject);
    test("it should be able to json stringify", vJson_1.vJson);
    test("it should be able to map", vMap_1.vMap);
    test("it should be able to map and json stringify", vMapJson_1.vMapJson);
    test("it should be able to encrypt", vEncrypt_1.vEncrypt);
    test("it should be able to console", vConsole_1.vConsole);
    test("it should be able to map, json and ecrypt", vMapEncrypt_1.vMapEncrypt);
    test("it should be able to create a database store", vStore_1.vStore);
    test("it should be able to empty database instance", emptyDB_1.emptyDB);
}
exports.entityTesting = entityTesting;