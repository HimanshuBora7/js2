/* In JavaScript, let, var, and const are used to declare variables, but they differ in scope, hoisting, and mutability. Here's a concise breakdown:
Scope:
var: Function-scoped or globally scoped if declared outside a function. Ignores block scope (e.g., inside {} like in loops or if-statements).

let: Block-scoped, meaning it's limited to the block {} where it's defined (e.g., loops, conditionals).

const: Block-scoped, same as let.

Hoisting:
var: Hoisted to the top of its function or global scope and initialized with undefined, allowing use before declaration (though it returns undefined).

let: Hoisted but not initialized, leading to a "Temporal Dead Zone" (TDZ) where accessing it before declaration throws a ReferenceError.

const: Same as let, hoisted but not initialized, also subject to TDZ.

Reassignment and Mutability:
var: Can be reassigned and redeclared in the same scope without errors.

let: Can be reassigned but not redeclared in the same scope.

const: Cannot be reassigned or redeclared after initialization. However, objects or arrays declared with const can have their contents mutated (e.g., adding elements to an array or changing object properties).

Initialization:
var: Can be declared without initialization (defaults to undefined).

let: Can be declared without initialization.

const: Must be initialized at declaration; otherwise, it throws a SyntaxError.
Use const for values that won’t be reassigned (preferred for immutability).

Use let for variables that need reassignment within a block scope.

Avoid var in modern JavaScript due to its loose scoping and hoisting issues; let and const are safer and clearer.


 */

// { -- scope -- }
// inside curly braces -> block scope out side this global scope

let a =300
if (true) {
 let a = 10;
//   const b = 20;
  var c = 30;
  console.log("INNER " , a);
}

// console.log(a);
// console.log(b);
console.log("OUTER" ,a);


// **global scope in browser and windows is different from code runtime enviornment in node  */



