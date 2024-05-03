// simple-calculator.js

// Function to perform addition
function add(num1, num2) {
  return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return num1 / num2;
}

// Parse command line arguments
const args = process.argv.slice(2);
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// Perform calculation based on user input
let result;
switch (operation) {
  case "add":
    result = add(num1, num2);
    break;
  case "subtract":
    result = subtract(num1, num2);
    break;
  case "multiply":
    result = multiply(num1, num2);
    break;
  case "divide":
    result = divide(num1, num2);
    break;
  default:
    result = "Error: Invalid operation";
}

// Display the result
console.log("Result:", result);
