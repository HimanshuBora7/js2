// Call back function
// A call back function in JavaScript is a function that is passed as an argument to another function and is executed at a later time or when a certain condition is met.This mechanism allows js to perform tasks like reading files, making https request or waiting for user input without blocking the execution of the program
function greet(name, callback) {
  console.log("hello " + name);
  console.log("u r signed in ");
  callback(name);
}
function sayBye(name) {
  console.log(name + ",Thanks for visiting. u r now logged out ");
}

greet("monk", sayBye);
