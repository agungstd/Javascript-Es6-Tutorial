const age = 25;
const name = "Pcode";
const person = {
  [`age-${age}`]: "twenty five",
  [`greetting-${name}`]: function () {
    return `hello ${name}`;
  },
};

console.log(person["age-25"]);
console.log(person["greetting-Pcode"]());

let nama = "fullName";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [nama]() {
    return `${this.firstName} ${this.lastName}`;
  }

  // New method using computed property method
  static [Symbol.hasInstance](instance) {
    return instance.firstName !== undefined && instance.lastName !== undefined;
  }

  // New computed method for greeting
  ['getGreeting']() {
    return `Hello, ${this.fullName}!`;
  }
}

let person2 = new Person("Pojok", "Code");
console.log(person2.fullName);
console.log(person2.getGreeting());

// Additional example of computed property with dynamic key
const dynamicKey = 'status';
const user = {
  [`${dynamicKey}Code`]: 200,
  [`is${dynamicKey.charAt(0).toUpperCase() + dynamicKey.slice(1)}`]: true
};

console.log(user.statusCode);
console.log(user.isStatus);

// Demonstrating computed property with Symbol
const uniqueSymbol = Symbol('description');
const objectWithSymbol = {
  [uniqueSymbol]: 'This is a symbol-keyed property'
};

console.log(objectWithSymbol[uniqueSymbol]);