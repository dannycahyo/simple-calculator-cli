// simple-calculator.js

// Parse command line arguments
const args = process.argv.slice(2);
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// Perform calculation based on user input
let result;
switch (operation) {
  case "add":
    // TODO: Implement addition logic here
    break;
  case "subtract":
    // TODO: Implement subtraction logic here
    break;
  case "multiply":
    // TODO: Implement multiplication logic here
    break;
  case "divide":
    // TODO: Implement division logic here
    break;
  default:
    console.log("Error: Invalid operation");
}

// Display the result
console.log("Result:", result);
