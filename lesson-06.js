"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

// ==========================================================
// Part One: Menu Array Basics
// ==========================================================
const menu = [
  "Espresso",
  "Croissant",
  "Sourdough Loaf",
  "Matcha Latte",
  "Avocado Toast",
];

console.log("Full menu:", menu);
console.log("First item:", menu[0]);
console.log("Last item:", menu[menu.length - 1]);
console.log("Menu length:", menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

// ==========================================================
// Part Two: Array Mutation Methods (push, unshift, pop, shift)
// ==========================================================

// 1. push: touches the END of the array (adds to end)
menu.push("Cinnamon Roll");
console.log("After push:", menu);

// 2. unshift: touches the BEGINNING of the array (adds to start)
menu.unshift("Iced Tea");
console.log("After unshift:", menu);

// 3. pop: touches the END of the array (removes from end)
menu.pop();
console.log("After pop:", menu);

// 4. shift: touches the BEGINNING of the array (removes from start)
menu.shift();
console.log("After shift:", menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

// ==========================================================
// Part Three: Loop Comparisons (for vs for...of)
// ==========================================================

console.log("--- 1. Counting for loop ---");
for (let i = 0; i < menu.length; i++) {
  console.log(`Item at index ${i}: ${menu[i]}`);
}

console.log("--- 2. for...of loop ---");
for (const item of menu) {
  console.log(`Menu item: ${item}`);
}

// Choose a counting 'for' loop when you need the index or custom stepping/reversal; choose 'for...of' when you just need direct, readable access to each value.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// ==========================================================
// Part Four: Array Methods (map, filter, find)
// ==========================================================

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

// 1. map: build display strings formatted with euro currency
const displayPrices = prices.map((price) => `€${price.toFixed(2)}`);
console.log("Display strings (map):", displayPrices);

// 2. filter: keep items under 5 euros
const budgetPrices = prices.filter((price) => price < 5);
console.log("Items under €5 (filter):", budgetPrices);

// 3. find: fetch the first item over 10 euros
const expensivePrice = prices.find((price) => price > 10);
console.log("First item over €10 (find):", expensivePrice);

// forEach returns undefined. The common trap is assigning the result of forEach to a variable expecting a new transformed array (as map produces), leaving that variable holding undefined.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// ==========================================================
// Part Five: Dynamic Iteration with Artist Cards
// ==========================================================

// ==========================================================
// Part Five: Dynamic Iteration with Artist Cards
// ==========================================================

// * The provided artists with one added artist of our own invention ("Stromae"):
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
  "Stromae", // Added artist
];

for (const artist of artists) {
  console.log(`Artist: ${artist}
Status: Featured on today's playlist
---`);
}

// When adding a new artist to the array data, we did not have to change any of the loop logic or conditions because array loops automatically adapt to the array's length.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.


// ==========================================================
// Part Six: References vs Spread Copy
// ==========================================================

// 1. Shared Reference:
const menuReference = menu;
menuReference.push("Blueberry Muffin");

console.log("Original menu (via menu):", menu);
console.log("Reference menu (via menuReference):", menuReference);

// 2. Spread Copy:
const menuCopy = [...menu];
menuCopy.push("Apple Tart");

console.log("Original menu length:", menu.length);
console.log("Cloned menuCopy length:", menuCopy.length);
// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// ==========================================================
// Part Seven: The Counting Classics (FizzBuzz, Sum, Largest)
// ==========================================================

// 1. Full FizzBuzz from 1 to 100:
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// 2. Compute the sum without library helpers:
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum); // Expected: 128

// 3. Find the largest value without library helpers:
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest number:", largest); // Expected: 41

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.
// ==========================================================
// Part Eight: String Classics with Loops
// ==========================================================

// 1. Reverse a string walking backwards by index:
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log("Reversed 'JavaScript':", reverseString("JavaScript"));


// 2. Count vowels with a loop and includes against a vowels array:
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log("Vowels in 'Croissant':", countVowels("Croissant"));


// 3. Palindrome check using reverseString and toLowerCase (tested on 3 words):
function isPalindrome(word) {
  const normalized = word.toLowerCase();
  return normalized === reverseString(normalized);
}

console.log("Is 'Racecar' a palindrome?", isPalindrome("Racecar")); // Expected: true
console.log("Is 'Kayak' a palindrome?", isPalindrome("Kayak"));     // Expected: true
console.log("Is 'Bakery' a palindrome?", isPalindrome("Bakery"));   // Expected: false

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.


