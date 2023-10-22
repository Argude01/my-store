const username: string = 'instructor';

const sum = (a: number, b: number) => a + b;
sum(1, 2);

class Person {
  constructor(private age: number, public firstName: string) {}

  getAge() {
    return this.age;
  }
}

const jane = new Person(27, 'Jane');
jane.firstName = 'Janesse';
// jane.age = 28; // Error: age is private








