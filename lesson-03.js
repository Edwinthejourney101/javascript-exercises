"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
// Part One: Shop greeting with template literal
const shopName = "Maison Sarah Bakery";
const openingHour = 7;
const closingHour = 19;

console.log(
  `Welcome to ${shopName}! We are open from ${openingHour}:00 until ${closingHour}:00.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

const messyString = "   fReSh bReAd aT oLd pRiCeS   ";

// Clean the string using method chaining:
const cleanedString = messyString
  .trim()
  .toLowerCase()
  .replace("old", "discounted");

console.log("Cleaned string:", cleanedString);

// Methods used:
// 1. .trim()        -> Removes extra whitespace from the beginning and end of the string.
// 2. .toLowerCase() -> Converts all uppercase characters to lowercase.
// 3. .replace()     -> Finds a specified substring ('old') and replaces it with a new value ('discounted').

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

const productString = "Artisan Sourdough Loaf";
const targetWord = "Sourdough";

// 1. Log string length
console.log("Length of product string:", productString.length);

// 2. Find position where target word begins
const wordIndex = productString.indexOf(targetWord);
console.log("Position of target word:", wordIndex);

// 3. Slice exactly that word
const slicedWord = productString.slice(
  wordIndex,
  wordIndex + targetWord.length,
);
console.log("Sliced word:", slicedWord);

// 4. Split the comma-separated list into pieces
const listString = "croissant,baguette,brioche,focaccia";
const itemsArray = listString.split(",");
console.log("Split array of items:", itemsArray);


// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

// Part Four: Price calculation and formatting
; // 19% tax

const finalPrice = netPrice * (1 + taxRate);

console.log(`The final price including tax is €${finalPrice.toFixed(2)}.`);

// Explanation: The formatting step with .toFixed(2) must come last because .toFixed() returns a string, not a number. If you format earlier, any further math operations will fail or cause unexpected string concatenation.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
// Part Five: Random numbers

// 1. Random whole number from 1 to 6 (die roll)
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Random number (1 to 6):", diceRoll);

// 2. Adapted recipe: Random whole number from 10 to 20
const random10To20 = Math.floor(Math.random() * 11) + 10;
console.log("Random number (10 to 20):", random10To20);

// Explanation:
// Math.random() gives a decimal from 0 up to (but not including) 1.
// Multiplying by 11 gives values from 0 up to 10.999...
// Math.floor() rounds that down to whole integers from 0 to 10 (11 total numbers).
// Finally, adding 10 shifts the starting point, giving a range of 10 to 20 inclusive.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

// ==========================================
// Part Six: MDN String Method
// ==========================================
const alertMessage = "Sale! ";
console.log(alertMessage.repeat(3));

// Method: String.prototype.repeat()
// Description: Constructs and returns a new string containing the specified number of copies of the given string concatenated together.


// ==========================================
// Part Seven: Username Generator & Mad-Libs
// ==========================================
// 1. Username Generator (First initial + full last name in lowercase)
const firstName = "Edwin";
const lastName = "Comé";
const username = (firstName[0] + lastName).toLowerCase();
console.log("Generated username:", username);

// 2. Mad-Libs Story (Single template literal using 4 variables)
const adjective = "sparkling";
const noun = "penguin";
const verb = "moonwalked";
const place = "Berlin Central Station";

const madLibStory = `Suddenly, a ${adjective} ${noun} ${verb} through ${place} carrying a warm croissant!`;
console.log(madLibStory);

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.



// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
