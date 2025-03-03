// 01. Object property initializer shorthand

// ES5 way of defining an object with properties
function createMachine1(name, status) {
  return {
    name: name,
    status: status,
  };
}

// ES6 way of defining an object with shorthand property names
function createMachine2(name, status) {
  return {
    name,
    status,
  };
}

console.log(createMachine1("Machine 1", "on")); // Output: { name: 'Machine 1', status: 'on' }
console.log(createMachine2("Machine 2", "on")); // Output: { name: 'Machine 2', status: 'on' }

// 02. Computed property name

// ES5 way of defining an object with computed property names
let name = "Machine 3";
let machine = {
  [name]: "server",         // Use variable 'name' as the key
  "machine Hour": 1000,     // Property name with space
};

console.log(machine[name]); // Output: "server"
console.log(machine["machine Hour"]); // Output: 1000

// Using a prefix to create computed property names
let prefix = "machine";
let machine2 = {
  [prefix + " name"]: "server", // Compute property name using prefix
  [prefix + " Hour"]: 1000,     // Compute property name using prefix
};

console.log(machine2["machine name"]); // Output: "server"
console.log(machine2["machine Hour"]); // Output: 1000

// 03. Concise method syntax

// ES5 way of defining a method in an object
let server = {
  name: "server",
  restart: function () {
    console.log("the " + this.name + " is restarting");
  },
};

server.restart(); // Output: "the server is restarting"

// ES6 way of defining a method in an object with concise syntax
let server2 = {
  name: "server",
  restart() {
    console.log("the " + this.name + " is restarting");
  },
};

server2.restart(); // Output: "the server is restarting"
