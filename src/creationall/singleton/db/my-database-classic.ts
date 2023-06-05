interface User {
    name: string,
    age: number
}

export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;
    private  users: User[] = [];

    private constructor() {}

    public static getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic.instance === 'null') {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }
        return <MyDatabaseClassic>MyDatabaseClassic.instance;
    }

    add(user: User): void {
        this.users.push(user);
    }
    remove(index: number): void {
        this.users.slice(index, 1);
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}

const db1 = MyDatabaseClassic.getInstance();
db1.add({ name: 'Caian', age: 27});
db1.add({ name: 'Maria', age: 37});
db1.add({ name: 'João', age: 47});

db1.show();
