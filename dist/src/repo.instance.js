"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_instance_1 = require("./database.instance");
var validations_1 = require("./utils/validations");
var RepoInstance = /** @class */ (function () {
    function RepoInstance(list, database) {
        this.list = list;
        this.database = database;
        this.usingDatabase = false;
        this.finalDatabase = null;
        if (database) {
            validations_1.Validations.ensureDatabaseLike(database, this, "constructor(list[], ==> db <== )");
            this.finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
            this.usingDatabase = true;
        }
    }
    RepoInstance.prototype.array = function () {
        return this.list;
    };
    RepoInstance.prototype.stringify = function () {
        if (this.finalDatabase) {
            return this.finalDatabase.tooling.serialize(this.list);
        }
        return JSON.stringify(this.list);
    };
    RepoInstance.prototype.parse = function (data) {
        if (this.finalDatabase) {
            return this.finalDatabase.tooling.unserialize(data);
        }
        return JSON.parse(data);
    };
    RepoInstance.prototype.vMapJson = function (handler) {
        if (this.finalDatabase) {
            return this.finalDatabase.tooling.serialize(this.list.map(handler));
        }
        return JSON.stringify(this.list.map(handler));
    };
    return RepoInstance;
}());
exports.RepoInstance = RepoInstance;
function Repo(list, database) {
    if (list === void 0) { list = []; }
    return new RepoInstance(list, database);
}
exports.Repo = Repo;
