import { DatabaseInstance } from "./database.instance";
import { DatabaseParallelInstance } from "./database.parallel.instance";
import { Validations } from "./utils/validations";

export class RepoInstance<Context> {

    private usingDatabase: boolean = false;
    private finalDatabase: DatabaseInstance = null;

    public constructor(
        private list: Context[],
        private database?: DatabaseInstance | DatabaseParallelInstance
    ) {
        if(database) {
            Validations.ensureDatabaseLike(database, this, "constructor(list[], ==> db <== )");
            this.finalDatabase = database instanceof DatabaseInstance ? database : database.first();
            this.usingDatabase = true;
        }
    }

    public array() {
        return this.list;
    }

    public stringify() {
        if(this.finalDatabase) {
            return this.finalDatabase.tooling.serialize(this.list);
        }
        return JSON.stringify(this.list);
    }

    public parse(data: string): Context[] {
        if(this.finalDatabase) {
            return this.finalDatabase.tooling.unserialize<Context[]>(data);
        }
        return JSON.parse(data);
    }

    public vMapJson<T>(handler: (item: Context) => T) {
        if(this.finalDatabase) {
            return this.finalDatabase.tooling.serialize(this.list.map(handler));
        }
        return JSON.stringify(this.list.map(handler));
    }
}

export function Repo<Context>(list: Context[] = [], database?: DatabaseInstance | DatabaseParallelInstance) {
    return new RepoInstance<Context>(list, database);
}
