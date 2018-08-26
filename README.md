# Artic

An agnostic ORM, built in Typescript for Node, that uses adapters to persist data to anywhere. It sports AES-256-CBC encryption out of the box with hashing for keys and namespaces. It remembers context and unserializes data back to its original state. Every entity can be used in the traditional sense of an ORM, but it comes with some other cool concepts as well. Every entity has the ability to spin up unlimited key-value stores, and because it uses a key-value persistance under the hood, it has potential to be faster and agile than the traditional ORM. 


With that being said:
```ts
import Artic from "@northyear/artic";
import { mainDatabase } from "@/database"

export class Idea extends Artic.Entity {
    public title: string;
}

export async function controller() {
    let idea = new Idea();
    idea.title = "Cool things";
    return idea.save(mainDatabase)
}
```