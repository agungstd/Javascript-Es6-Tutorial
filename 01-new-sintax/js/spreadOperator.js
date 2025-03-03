// Define an array 'add'
const add = [1, 3, 5];

// Combine 'add' array with other elements using spread operator
const combine = [2, 4, 6, ...add];
console.log(combine); // Output: [2, 4, 6, 1, 3, 5]

// Function with rest parameter to capture remaining arguments
function f(a, b, ...args) {
  console.log(args); // Log the remaining arguments
}
f(1, 2, 3, 4, 5); // Output: [3, 4, 5]

// Combine arrays with spread operator in different orders
const odd2 = [1, 3, 5];
const combine2 = [...odd2, 2, 4, 6];
console.log(combine2); // Output: [1, 3, 5, 2, 4, 6]

const odd3 = [1, 3, 5];
const combine3 = [2, 4, ...odd3, 6];
console.log(combine3); // Output: [2, 4, 1, 3, 5, 6]

// Function to compare two numbers
function compare(a, b) {
  return a - b; // Return the difference between a and b
}

let result = compare.apply(null, [1, 2]); // Use apply method to call compare
console.log(result); // Output: -1

let result2 = compare(...[1, 2]); // Use spread operator to call compare
console.log(result2); // Output: -1

// Define arrays of rivers
let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];

// Use apply method to push moreRivers elements into rivers
[].push.apply(rivers, moreRivers);
console.log(rivers); // Output: ["Nile", "Ganges", "Yangte", "Danube", "Amazon"]

// Reset arrays of rivers
rivers = ["Nile", "Ganges", "Yangte"];
moreRivers = ["Danube", "Amazon"];

// Use spread operator to push moreRivers elements into rivers
rivers.push(...moreRivers);
console.log(rivers); // Output: ["Nile", "Ganges", "Yangte", "Danube", "Amazon"]

// Define an array of characters
let initialChar = ["A", "B"];
let chars = [...initialChar, "C"];
console.log(chars); // Output: ["A", "B", "C"]

// Combine multiple arrays using spread operator
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumber = [...numbers, ...moreNumbers];
console.log(allNumber); // Output: [1, 2, 3, 4]

// Create a copy of an array using spread operator
let scores = [80, 70, 90];
let copyArray = [...scores];
console.log(copyArray); // Output: [80, 70, 90]

// Combine characters using spread operator to split string into array
chars = ["A", ..."BC", "E"];
console.log(chars); // Output: ["A", "B", "C", "E"]
