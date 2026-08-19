"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
// Part One: Five shop variables
const shopName = "Sarah's Artisan Bakery"; // const because the shop name is fixed and won't change
const foundedYear = 2021; // const because the founding year is a permanent historical fact
let dailyCustomerCount = 48; // let because customer count changes throughout the day
let isOpen = true; // let because the open/closed status changes daily
const storeAddress = "12 Bakery Lane"; // const because the physical location remains constant

console.log("Shop Name:", shopName);
console.log("Founded Year:", foundedYear);
console.log("Daily Customers:", dailyCustomerCount);
console.log("Is Open:", isOpen);
console.log("Address:", storeAddress);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
// Part Two: typeof checks
console.log(typeof shopName);
console.log(typeof foundedYear);
console.log(typeof dailyCustomerCount);
console.log(typeof isOpen);
console.log(typeof storeAddress);
console.log(typeof null);
console.log(typeof undefined);

// Famous historical bug: `typeof null` returns "object" instead of "null" due to an early implementation bug in the original 1995 JavaScript engine where null was represented with the 0 type tag matching objects.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
// Part Three: unassigned vs intentional null
let unassignedItem;
let explicitEmpty = null;

console.log(
  "unassignedItem value:",
  unassignedItem,
  "| typeof:",
  typeof unassignedItem,
);
console.log(
  "explicitEmpty value:",
  explicitEmpty,
  "| typeof:",
  typeof explicitEmpty,
);

// `undefined` means a variable has been declared but not yet assigned any value, whereas `null` is an intentional assignment representing the explicit absence of any value.
// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

// Convert the provided strings to their intended types
const priceNumber = Number(priceText);
const countNumber = Number(countText);
const flagBoolean = Boolean(flagText);

// Convert one number of your own to a string
const myRating = 5;
const ratingString = String(myRating);

// Log each result together with its typeof
console.log("priceNumber:", priceNumber, typeof priceNumber);
console.log("countNumber:", countNumber, typeof countNumber);
console.log("flagBoolean:", flagBoolean, typeof flagBoolean);
console.log("ratingString:", ratingString, typeof ratingString);

// Converting with Number() (such as Number(priceText) or Number(countText)) would produce NaN (Not-a-Number) if the string contained non-numeric characters (e.g., "$4.50" or "12 items").

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// const bakeryName = "Maison Sarah";
// bakeryName = "The Corner Bakery";
// openingHour = 7;
// console.log(loafCount);
// let loafCount = 12;
// Repair 1: Changed const to let for bakeryName so it can be reassigned without error.
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";

// Repair 2: Added const to declare openingHour explicitly, which is required in strict mode.
const openingHour = 7;

// Repair 3: Moved the declaration of loafCount above console.log to avoid a Temporal Dead Zone ReferenceError.
let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
// Part Six: Swapping two variables using a temporary variable
let a = "Croissant";
let b = "Baguette";

console.log("Before swap -> a:", a, "| b:", b);

let temp = a;
a = b;
b = temp;

console.log("After swap  -> a:", a, "| b:", b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
