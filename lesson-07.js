"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
// ==========================================================
// Part One: Single Menu Item Object & Property Access
// ==========================================================

const menuItem = {
  name: "Almond Croissant",
  price: 3.8,
  isVegetarian: true,
  calories: 380,
};

// 1. Access with dot notation:
console.log("Item name (dot):", menuItem.name);
console.log("Item price (dot):", menuItem.price);

// 2. Access with bracket notation using a variable:
const propertyToLookup = "isVegetarian";
console.log(
  "Is vegetarian (bracket with variable):",
  menuItem[propertyToLookup],
);

// Bracket notation is required here because 'propertyToLookup' is a variable holding the property name as a string; dot notation (menuItem.propertyToLookup) would look literally for a property named 'propertyToLookup' rather than evaluating the variable's value.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.


// ==========================================================
// Part Two: Object Method with `this`
// ==========================================================

menuItem.describe = function () {
  return `${this.name} costs €${this.price.toFixed(2)} and contains ${this.calories} kcal (${this.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}).`;
};

console.log("Item description:", menuItem.describe());
// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
// ==========================================================
// Part Three: Array of Objects & for...of Iteration
// ==========================================================

const menu = [
  { name: "Espresso", price: 2.5, isVegetarian: true, category: "Drink" },
  { name: "Almond Croissant", price: 3.8, isVegetarian: true, category: "Bakery" },
  { name: "Ham & Cheese Toastie", price: 6.5, isVegetarian: false, category: "Sandwich" },
  { name: "Matcha Latte", price: 4.2, isVegetarian: true, category: "Drink" },
  { name: "Avocado Toast", price: 7.5, isVegetarian: true, category: "Food" }
];

console.log("--- Bakery Menu ---");
for (const item of menu) {
  console.log(`• ${item.name} [${item.category}] - €${item.price.toFixed(2)} (${item.isVegetarian ? "Veg" : "Non-Veg"})`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

// ==========================================================
// Part Four: Callback Methods (filter, map, find)
// ==========================================================

// 1. Vegetarian item names combining filter and map:
const vegetarianNames = menu
  .filter((item) => item.isVegetarian)
  .map((item) => item.name);

console.log("Vegetarian item names:", vegetarianNames);

// 2. First item cheaper than €3 with find:
const affordableItem = menu.find((item) => item.price < 3);
console.log("First item under €3:", affordableItem);

// When no element matches the condition provided to the callback, `find` returns `undefined`.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.


// ==========================================================
// Part Five: Object Inspection (keys, values, entries)
// ==========================================================

const sampleItem = menu[1]; // Using "Almond Croissant" from our menu

// 1. Log keys:
console.log("Item keys:", Object.keys(sampleItem));

// 2. Log values:
console.log("Item values:", Object.values(sampleItem));

// 3. Log entries with destructuring in a for...of loop:
console.log("--- Key-Value Pairs ---");
for (const [key, value] of Object.entries(sampleItem)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

// ==========================================================
// Part Six: Shared References vs Spread Copy Overrides
// ==========================================================

// 1. Shared reference demonstration:
const originalItem = menu[0]; // Espresso (initially €2.50)
const itemReference = originalItem;

itemReference.price = 2.9;

console.log("Original item after changing reference:", originalItem);
console.log("Item reference:", itemReference);

// 2. Spread copy with price override:
const itemCopy = { ...originalItem, price: 3.5 };

console.log("Original item (unaffected by spread copy):", originalItem);
console.log("Item copy (with overridden price):", itemCopy);


// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// ==========================================================
// Part Seven: Word Frequency Counter & Sorted Entries
// ==========================================================

// * The provided sentence for the word frequency counter:
const sentence = "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

// 1. Split sentence into words and count frequencies:
const words = sentence.split(" ");
const wordCounts = {};

for (const word of words) {
  if (wordCounts[word]) {
    wordCounts[word] += 1;
  } else {
    wordCounts[word] = 1;
  }
}

console.log("Word frequency counter:", wordCounts);

// 2. Sort entries descending by frequency (most frequent first):
const sortedWordFrequencies = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
console.log("Sorted word frequencies (most to least):", sortedWordFrequencies);



// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
