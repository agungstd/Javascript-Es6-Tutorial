// contoh cara membuat objek ES5
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var john = new Person("Pojok Code");
console.log(john.getName());

console.log(john instanceof Person);
console.log(john instanceof Object);

class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let code = new Person2("Pojok Code");
console.log(code.getName());
console.log(code instanceof Person2);
console.log(code instanceof Object);

// hal yang perlu diperhatiakan ketika membuat objek dengan class
// 1. pendeklarasian class tidak hoisted seperti funcrion
// 2. semua code dalam class dijalankan dengan mode strict dan ini tidak dapat diubah
// 3. kerika membuat objek di class harus dengan new

// Demonstrasi perbedaan class dan function constructor
console.log("Demonstrasi karakteristik class:");

try {
  // Contoh tidak hoisting
  // Uncommenting line below will cause ReferenceError
  // let TestHoisting = new ClassExample();

  class ClassExample {
    constructor() {
      this.type = "class";
    }
  }

  // Fungsi constructor dapat dipanggil sebelum deklarasi (hoisting)
  function FunctionExample() {
    this.type = "function";
  }

  console.log("Class characteristics test:");
  
  // Demonstrasi keharusan menggunakan 'new'
  try {
    // Ini akan menghasilkan TypeError
    // Person2("Tanpa new"); 
  } catch (error) {
    console.log("Error saat memanggil class tanpa new:", error.message);
  }

  // Menambahkan static method
  class StaticMethodDemo {
    constructor(name) {
      this.name = name;
    }

    static createAnonymous() {
      return new StaticMethodDemo("Anonymous");
    }

    greet() {
      return `Hello, ${this.name}!`;
    }
  }

  const anonymousPerson = StaticMethodDemo.createAnonymous();
  console.log(anonymousPerson.greet());

} catch (error) {
  console.error("Terjadi kesalahan:", error.message);
}