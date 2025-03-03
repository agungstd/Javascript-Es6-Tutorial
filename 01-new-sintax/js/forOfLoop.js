// Define an array of scores
let scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Iterate over the array using 'let'
for (let score of scores) {
  console.log(score + 5); // Add 5 to each score and log it
}

// Iterate over the array using 'const'
for (const score of scores) {
  console.log(score + 5); // Add 5 to each score and log it
}

// Define an array of colors
let colors = ["red", "green", "blue"];

// Iterate over the array with index and value
for (const [index, color] of colors.entries()) {
  console.log(index, color); // Log the index and color
}

// Define an array of rating objects
const ratings = [
  { user: "jon", score: 3 },
  { user: "sarah", score: 4 },
  { user: "bob", score: 5 },
  { user: "lisa", score: 1 },
];

// Calculate the sum of scores
let sum = 0;
for (const { score } of ratings) {
  sum += score; // Add each score to the sum
}
console.log(sum); // Log the total sum

// Create a Map of colors
colors = new Map();
colors.set("red", "#FF0000");
colors.set("green", "#00FF00");
colors.set("blue", "#0000FF");

// Iterate over the Map of colors
for (let color of colors) {
  console.log(color); // Log each color entry as [key, value] pair
}

// Define an array of scores
scores = [10, 20, 30];
scores.message = "Hi"; // Add a custom property to the array

// Iterate over the array using 'for...in' loop
for (let scor in scores) {
  console.log(scor); // Log the index (including custom properties)
}

// Iterate over the array using 'for...of' loop
for (let scor of scores) {
  console.log(scor); // Log the value (excluding custom properties)
}
