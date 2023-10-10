function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Caian',
  lastName: 'Pedroso',
  age: 28,
  
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'OIE';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('João', 'Pedroso', 28);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Bruna', 'Santos', 27);
console.log(person2);
console.log(person2.fullName());
