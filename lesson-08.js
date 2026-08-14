'use strict';

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.
// ==========================================================
// Part One: Artist Class & Instance Creation
// ==========================================================

class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name} performs ${this.genre} with a total runtime of ${this.total}.`;
  }
}

const artist1 = new Artist("Pinkfong", "Children's music", "11:31");
const artist2 = new Artist("Johnny Cash", "Country", "15:40");

console.log("Artist 1 description:", artist1.describe());
console.log("Artist 2 description:", artist2.describe());

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];
// ==========================================================
// Part Two: Instantiating from Plain Object Data
// ==========================================================

const artistInstances = [];

for (const data of artistData) {
  const instance = new Artist(data.name, data.genre, data.total);
  artistInstances.push(instance);
}

console.log("--- All Artist Descriptions ---");
artistInstances.forEach((artist) => {
  console.log(artist.describe());
});

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.



// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
// const broken = Artist("Pinkfong", "Children's music", "11:31");
// ! Snippet two, an arrow function used as a method that reads this:
// const single = { title: "Hurt", artist: "Johnny Cash", describe: () => `${this.title} by ${this.artist}` };
// console.log(single.describe());
// * Snippet three, the correct call. Uncomment after part one:
// console.log(new Artist("Asake", "Afrobeats", "14:08").describe());


// ==========================================================
// Part Three: Predicting and Verifying Behavior
// ==========================================================

// Snippet 1: Class call missing `new`
// Prediction: Throws a TypeError because ES6 classes cannot be called without the 'new' keyword.
// Result: TypeError: Class constructor Artist cannot be invoked without 'new'
try {
  const broken = Artist("Pinkfong", "Children's music", "11:31");
} catch (error) {
  console.log("Snippet 1 Error caught:", error.message);
}

// Snippet 2: Arrow function method accessing `this`
// Prediction: Logs "undefined by undefined" because arrow functions do not have their own `this` binding; they inherit `this` from the lexical enclosing scope.
// Result: undefined by undefined
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`
};
console.log("Snippet 2 Output:", single.describe());

// Snippet 3: Correct call with `new`
// Prediction: Successfully creates an instance and logs the formatted description string.
// Result: "Asake performs Afrobeats with a total runtime of 14:08."
console.log("Snippet 3 Output:", new Artist("Asake", "Afrobeats", "14:08").describe());




// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.



// ==========================================================
// Part Four: Inheritance with FeaturedArtist and super
// ==========================================================

class FeaturedArtist extends Artist {
  constructor(name, genre, total, blurb) {
    super(name, genre, total);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} Spotlight: ${this.blurb}`;
  }
}

const featured = new FeaturedArtist(
  "Adriano Celentano",
  "Italian pop",
  "20:52",
  "Legendary icon of 20th-century Italian music and film."
);

console.log("Featured Artist:", featured.describe());



// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:
function ArtistOld(name, genre) {
  this.name = name;
  this.genre = genre;
}
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};


// ==========================================================
// Part Five: Annotating Pre-2015 Prototype Syntax
// ==========================================================

// Equivalent to: class ArtistOld { constructor(name, genre) { this.name = name; this.genre = genre; } }
function ArtistOld(name, genre) {
  this.name = name;
  this.genre = genre;
}

// Equivalent to: an instance method inside the class body -> describe() { return `${this.name}, ${this.genre}`; }
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};

// Equivalent to: an instance method inside the class body -> tag() { return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`; }
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};

// Verifying behavior:
const oldStyleInstance = new ArtistOld("Johnny Cash", "Country");
console.log("Pre-2015 Instance describe():", oldStyleInstance.describe());
console.log("Pre-2015 Instance tag():", oldStyleInstance.tag());


// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

// ==========================================================
// Part Six: Static Method `Artist.named`
// ==========================================================

Artist.named = function (instances, name) {
  return instances.find((instance) => instance.name === name);
};

// Test lookup using the artistInstances array from Part Two:
const foundArtist = Artist.named(artistInstances, "Asake");

if (foundArtist) {
  console.log("Found Artist via static method:", foundArtist.describe());
}
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
