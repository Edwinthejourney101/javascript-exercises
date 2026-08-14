"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:

function getOrderMessage(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.

// ==========================================================
// Part Two: Returning Version of Function
// ==========================================================
function getOrderMessageReturning(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

// Log results at the call site:
console.log("Order 15:", getOrderMessageReturning(15));
console.log("Order 8:", getOrderMessageReturning(8));
console.log("Order 4:", getOrderMessageReturning(4));
console.log("Order 1:", getOrderMessageReturning(1));

// Returning a value instead of printing inside the body makes the function more reusable because the caller decides what to do with the result (e.g., render in a UI, save to a database, or pass into another function) rather than being locked into console output.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:

// ==========================================================
// Part Three: Function Expression & One-Line Arrow Function
// ==========================================================

// 1. Converted to a function expression:
const double = function (n) {
  return n * 2;
};

// 2. Converted to a one-line arrow function with implicit return:
const shout = (text) => `${text.toUpperCase()}!`;

// Proof with logged calls:
console.log("double(4):", double(4)); // Expected: 8
console.log("double(15):", double(15)); // Expected: 30
console.log("shout('hello'):", shout("hello")); // Expected: HELLO!
console.log("shout('croissant'):", shout("croissant")); // Expected: CROISSANT!

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.

// Function with a default parameter for 'taxRate' (10% by default)
function calculateTotal(price, taxRate = 0.1) {
  return price + price * taxRate;
}

// 1. Call that supplies the argument (explicit 20% tax)
console.log("With custom tax rate:", calculateTotal(100, 0.2)); // Output: 120

// 2. Call that relies on the default parameter value (uses default 10% tax)
console.log("With default tax rate:", calculateTotal(100)); // Output: 110

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.
// Define the repeat function
function repeat(callback, count) {
  let i = 1;
  while (i <= count) {
    callback(i); // Calls the callback on each iteration (passing the current index)
    i = i + 1;
  }
}

// Example 1: Basic arrow function
repeat(() => {
  console.log("Hello, world!");
}, 3);

// Example 2: Arrow function utilizing the current count/index
repeat((iteration) => {
  console.log(`Execution number: ${iteration}`);
}, 4);


// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); // prediction:
console.log(shopName); // prediction:
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction:
}
// console.log(insideIf); // prediction first, then uncomment to verify:

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

// Part Seven: Temperature Converter
// ==========================================

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Table 1: Celsius to Fahrenheit
console.log("--- Celsius to Fahrenheit ---");
const celsiusValues = [0, 21.5, 100];

for (const c of celsiusValues) {
  const f = celsiusToFahrenheit(c);
  console.log(`${c.toFixed(1)}°C -> ${f.toFixed(1)}°F`);
}

// Table 2: Fahrenheit to Celsius
console.log("\n--- Fahrenheit to Celsius ---");
const fahrenheitValues = [32, 68, 212];

for (const f of fahrenheitValues) {
  const c = fahrenheitToCelsius(f);
  console.log(`${f.toFixed(1)}°F -> ${c.toFixed(1)}°C`);
}

console.log("\n" + "=".repeat(35) + "\n");
// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.


try {
  const answer = 42;
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`Oops, something went wrong: ${error.message}`);
}

// Proving the program survived the error:
console.log("The program continues to run smoothly after handling the error!");

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
// const answer = 42;
// console.log(answer.toUpperCase());

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
