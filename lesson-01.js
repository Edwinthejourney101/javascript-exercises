"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.
/*15 + 27 * 2
69
> 
> (100 - 45) / 5
11
> 
> 2 ** 4 + 10 % 3
17
> 
> 12.5 * 4 - 8 / 2
46*/

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
console.log("Hello, updated world!");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.
// Node executes the file saved on the hard drive, so changes in the editor only take effect after saving the file to disk.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.
// Match: Both Node and Chrome DevTools evaluate the JavaScript code and output the message string to a console.
// Difference: Chrome DevTools prints the expression return value ('undefined') right after logging and runs in the browser context with DOM access, while Node runs as a server runtime without browser objects.
// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.
/*
node:internal/modules/cjs/loader:1143
  throw err;
  ^

Error: Cannot find module 'C:\Users\...\lesson-01.js'
*/
// Resolution: I resolved the error by navigating back into the 'javascript-exercises' folder where lesson-01.js is located before running the node command.
// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
