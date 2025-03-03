// Function definition that takes one parameter 'maeeage' and logs it to the console
function say(maeeage) {
  console.log(maeeage);
}

// Call the 'say' function with no arguments, this will log 'undefined'
say();

// Function definition that takes one parameter 'message' and logs it to the console
// If 'message' is not provided, it defaults to "Hello"
function say2(message) {
  message = typeof message !== "undefined" ? message : "Hello";
  console.log(message);
}

// Call the 'say2' function with no arguments, this will log "Hello"
say2();

// Function definition that takes one parameter 'message' with default value "Hello"
function say3(message = "Hello") {
  console.log(message);
}

// Call the 'say3' function with no arguments, this will log "Hello"
say3();
// Call the 'say3' function with argument "hello 2", this will log "hello 2"
say3("hello 2");
// Call the 'say3' function with 'undefined' as argument, this will log "Hello" due to default value
say3(undefined);

// Function definition to create a div with default styles and append it to the document body
function createDiv(height = "100px", width = "100px", border = "1px solid red") {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.append(div);
  return div;
}

// Call 'createDiv' with no arguments, this will create a div with default styles and log it
console.log(createDiv());
// Call 'createDiv' with custom border style, this will create a div with custom border and default height and width and log it
console.log(createDiv(undefined, undefined, "5px solid blue"));

// Function definition to add a toy to the toyBox array
function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}
// Call 'put' with "Toy Car", this will return an array with "Toy Car"
console.log(put("Toy Car"));
// Call 'put' with "Toy Bike", this will return an array with "Toy Bike" since toyBox is initialized as an empty array each time
console.log(put("Toy Bike"));

// Function to throw an error when no arguments are provided
function requereArg() {
  throw new Error("No arguments");
}

// Function definition that takes two parameters 'x' and 'y' and returns their sum
// If 'x' or 'y' are not provided, it will throw an error
function add(x = requereArg(), y = requereArg()) {
  return x + y;
}

// Call 'add' with 1 and 2, this will return 3
console.log(add(1, 2));
// Call 'add' with only 1, this will throw an error because 'y' is not provided
console.log(add(1));
