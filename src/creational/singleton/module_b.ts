// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";

import { db1 as db } from "./module_a";


const db1 = MyDatabaseFunction;
db1.add({ name: 'Luiz', age: 27});
db1.add({ name: 'Ana', age: 37});
db1.add({ name: 'Padro', age: 47});

db1.show();

console.log(db1 === db)