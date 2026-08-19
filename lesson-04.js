"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction:
console.log(3 == "3"); // prediction:
console.log("5" - 1); // prediction:
console.log("5" + 1); // prediction:
console.log(1 + true); // prediction:
console.log(10 >= 10); // prediction:
console.log(!(5 > 2)); // prediction:
console.log(4 !== "4"); // prediction:
console.log("b" > "a"); // prediction:
console.log(0 === -0); // prediction:

// * The provided expressions with prediction and actual results:
console.log(3 === "3"); // prediction: false | actual: false (strict comparison checks both type and value)
console.log(3 == "3"); // prediction: true  | actual: true (loose equality coerces "3" to number 3)
console.log("5" - 1); // prediction: 4     | actual: 4 (subtraction forces string "5" to number 5)
console.log("5" + 1); // prediction: "51"  | actual: "51" (addition with a string triggers string concatenation)
console.log(1 + true); // prediction: 2     | actual: 2 (boolean true coerces to number 1 in addition)
console.log(10 >= 10); // prediction: true  | actual: true (greater than or equal comparison)
console.log(!(5 > 2)); // prediction: false | actual: false (5 > 2 is true; NOT operator inverts to false)
console.log(4 !== "4"); // prediction: true  | actual: true (strict inequality is true because types differ)
console.log("b" > "a"); // prediction: true  | actual: true (lexicographical comparison: 'b' has higher code point than 'a')
console.log(0 === -0); // prediction: true  | actual: true (strict equality treats +0 and -0 as equal)

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.
// ==========================================================
// Part Two: If / Else Statement
// ==========================================================
const isStoreOpen = true;

if (isStoreOpen) {
  console.log("Welcome in! We are open for business.");
} else {
  console.log("Sorry, we are currently closed.");
}

// Run 1 (when isStoreOpen = true):
// Output: "Welcome in! We are open for business."

// Run 2 (when isStoreOpen = false):
// Output: "Sorry, we are currently closed."

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.
// ==========================================================
// Part Three: Order Pricing Else If Chain
// ==========================================================
const itemCount = 15;

if (itemCount > 12) {
  console.log("Bulk wholesale discount applied (20% off).");
} else if (itemCount > 6) {
  console.log("Small bundle discount applied (10% off).");
} else {
  console.log("Standard retail price (no discount).");
}

// Tested values for each branch:
// itemCount = 15 -> "Bulk wholesale discount applied (20% off)."
// itemCount = 8  -> "Small bundle discount applied (10% off)."
// itemCount = 3  -> "Standard retail price (no discount)."

// Explanation:
// JavaScript evaluates `if...else if` conditions in order from top to bottom and executes only the FIRST branch that evaluates to true. If we placed `itemCount > 6` first, an order of 15 items would trigger that condition and stop, never reaching the more specific `itemCount > 12` condition.

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];

// Truthy / Falsy predictions and Boolean() verifications:
// 1. false     -> prediction: Falsy  | actual: false
console.log("false:", Boolean(courtValues[0]));

// 2. 0         -> prediction: Falsy  | actual: false
console.log("0:", Boolean(courtValues[1]));

// 3. "0"       -> prediction: Truthy | actual: true (any non-empty string is truthy)
console.log('"0":', Boolean(courtValues[2]));

// 4. ""        -> prediction: Falsy  | actual: false (empty string is falsy)
console.log('"":', Boolean(courtValues[3]));

// 5. " "       -> prediction: Truthy | actual: true (contains a whitespace character)
console.log('" ":', Boolean(courtValues[4]));

// 6. "bread"   -> prediction: Truthy | actual: true (non-empty string is truthy)
console.log('"bread":', Boolean(courtValues[5]));

// 7. null      -> prediction: Falsy  | actual: false
console.log("null:", Boolean(courtValues[6]));

// 8. undefined -> prediction: Falsy  | actual: false
console.log("undefined:", Boolean(courtValues[7]));

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
const day = "Sunday";
if (day === "Saturday") {
  console.log("Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:


// ==========================================================
// Part Six: Repairing the Broken Program
// ==========================================================

let shopStatus = "closed";

// Repair 1: Used strict comparison (===) instead of assignment (=) so the condition checks the status rather than overwriting it.
if (shopStatus === "open") {
  console.log("Welcome in");
}

const size = "M";
switch (size) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    // Repair 2: Added break to prevent unintentional fall-through into case "L".
    break;
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
    break;
}

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

// ==========================================================
// Part Seven: Classic Exercises
// ==========================================================

// 1. Leap Year Checker
// Rule: (divisible by 4 AND NOT divisible by 100) OR (divisible by 400)
const year1 = 2024;
const year2 = 1900;
const year3 = 2000;

const isLeapYear1 = (year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0;
const isLeapYear2 = (year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0;
const isLeapYear3 = (year3 % 4 === 0 && year3 % 100 !== 0) || year3 % 400 === 0;

console.log(`Is ${year1} a leap year?`, isLeapYear1); // Expected: true
console.log(`Is ${year2} a leap year?`, isLeapYear2); // Expected: false
console.log(`Is ${year3} a leap year?`, isLeapYear3); // Expected: true

// 2. Single-Number FizzBuzz
const num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
