// Function to calculate the sum of all arguments passed
function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a; // Add each argument to the total
  }
  return total; // Return the total sum
}

console.log(sum(1, 2, 3, 4, 5, 6)); // Output: 21

// Function to calculate the sum of all numeric arguments, filtering out non-numeric values
function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number"; // Filter out non-numeric values
    })
    .reduce(function (prev, curr) {
      return prev + curr; // Add each numeric value to the previous one
    });
}

let result = sum(10, "Hi", null, undefined, 25);
console.log(result); // Output: 35

// Function to combine all arguments into a single string separated by spaces
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr; // Concatenate each argument with a space in between
  });
};

let message = combine("JavaScript", "Rest", "Parameters");
console.log(message); // Output: "JavaScript Rest Parameters"

// Function to create a div element with default styles and append it to the document body
function createDiv(height = "100px", width = "100px", border = "1px solid red") {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.append(div);
  return div;
}

console.log(createDiv()); // Create and log a div with default styles
console.log(createDiv(undefined, undefined, "5px solid blue")); // Create and log a div with custom border style
