"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
var database_instance_1 = require("../../../src/database.instance");
function isDatabaseInstance() {
    expect(is_1.Is.database(new database_instance_1.DatabaseInstance("main"))).toBe(true);
    expect(is_1.Is.database(this)).toBe(false);
}
exports.isDatabaseInstance = isDatabaseInstance;
