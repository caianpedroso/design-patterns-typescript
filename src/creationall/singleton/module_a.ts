// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";
const db1 = MyDatabaseFunction;
db1.add({ name: 'Caian', age: 27});
db1.add({ name: 'Maria', age: 37});
db1.add({ name: 'João', age: 47});

db1.show();

export { db1 }