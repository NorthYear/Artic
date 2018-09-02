# Artic

An agnostic ORM, built in Typescript for Node, that uses adapters to persist data to anywhere. AES-256-CBC encryption with an initialization vector is available for persistance out of the box. It supports SHA-256 hashing for keys and namespaces in places where entropy is not possible. It remembers context and unserializes data back to its original state. Every entity can be used in the traditional sense of an ORM, but it comes with extra features as well. Every entity has the ability to spin up unlimited key-value stores, and because it uses a key-value persistance under the hood, it has potential to be faster and more agile than the traditional ORM.

It subscribes to the concept that a persistance layer should not be a blackbox that we send our data to without actually knowing how it is persisted. With the ability to encrypt data before ever leaving your hands, you can know that data is or is not secure. 


With that being said,
```ts
import Artic from "@northyear/artic";
import { mainDatabase } from "@/database"

export class Idea extends Artic.Entity {
    public title: string;
}

export async function controller() {
    let idea = new Idea();
    idea.title = "Cool things";
    return idea.vSave(mainDatabase)
}
```
