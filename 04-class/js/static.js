// contoh static method di ES5
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.createAnonimous = function (gender) {
  let name = gender === "male" ? "Mr. Anonimous" : "Mrs. Anonimous";
  return new Person(name);
};

var anonim = Person.createAnonimous();
console.log(anonim.getName());

// contoh di ES6
class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static createAnonimous(gender) {
    let name = gender === "male" ? "Mr. Anonimous" : "Mrs. Anonimous";
    return new Person2(name);
  }
}

let anonim2 = Person2.createAnonimous("male");
console.log(anonim2.getName());

// let anomim3 = new Person2("Pojok Code");
// anomim3.createAnonimous("female");

class Item {
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

console.log(Item.getCount());

class Item2 {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }

  static count = 0;
  static getCount() {
    return Item2.count;
  }
}

let pen = new Item2("pen", 10);
let book = new Item2("book", 5);
console.log(Item2.getCount());

// Tambahan contoh static method dengan berbagai fungsionalitas
class MathUtils {
  // Static method untuk operasi matematika
  static add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  // Static method untuk membandingkan
  static max(...numbers) {
    return Math.max(...numbers);
  }

  // Static method dengan validasi
  static validatePositive(...numbers) {
    return numbers.every(num => num > 0);
  }
}

console.log(MathUtils.add(1, 2, 3, 4)); // 10
console.log(MathUtils.max(10, 5, 8)); // 10
console.log(MathUtils.validatePositive(1, 2, 3)); // true
console.log(MathUtils.validatePositive(1, -2, 3)); // false

// Contoh static method dengan singleton pattern
class DatabaseConnection {
  static #instance = null;

  constructor(connectionString) {
    if (DatabaseConnection.#instance) {
      return DatabaseConnection.#instance;
    }
    this.connectionString = connectionString;
    DatabaseConnection.#instance = this;
  }

  static getInstance(connectionString) {
    if (!this.#instance) {
      this.#instance = new DatabaseConnection(connectionString);
    }
    return this.#instance;
  }

  connect() {
    console.log(`Connected to: ${this.connectionString}`);
  }
}

const db1 = DatabaseConnection.getInstance('mongodb://localhost:27017');
const db2 = DatabaseConnection.getInstance('mongodb://another-url');
console.log(db1 === db2); // true - same instance
db1.connect();