"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
exports.Database = database_1.Database;
var entity_1 = require("./entity");
exports.Entity = entity_1.Entity;
var repo_instance_1 = require("./repo.instance");
exports.Repo = repo_instance_1.Repo;
exports.default = { Database: database_1.Database, Entity: entity_1.Entity, Repo: repo_instance_1.Repo };
