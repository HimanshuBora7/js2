const user = {
  username: " bochie",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website `);
    console.log(this); // this will print whole of the current object
  },
};

user.welcomeMessage();

user.username = " masao";
// user.welcomeMessage();
// console.log(this); // this will print empty object cpz we are in node enviornment

//**important -- inside browser global object is windows and in node envioenment it is empty object   */

// function tea(){
//    let user = "bochie"
//     console.log(this.user); // we can't use this inside functions
//    //this will throw undefine
// }

// tea();

// const tea = function(){
//    let user = "bochie"
//     console.log(this.user);
// }

// tea()

// //this will still throw undefine so we can't use this keyword  with functions it is used in the context of object

//Arrow function

// const tea = () => {
//    let user = "bochie"
//     console.log(this.user);
// }

// tea()  //this keyword here also will throw undefine

//basic syntax for arrow function

// const addTwo = (num1 , num2) => {
//    return num1+num2;
// }

// console.log(addTwo(3,2));

// implicit return way to write arrow function

// const addTwo = (num1 , num2) => num1 + num2;

// another way
// const addTwo = (num1 , num2) => (num1 + num2);

// if we wrap arrow function in curly braces then we have to write return keyword ,if we write returning stuff in parentheis then we do not have to write return keyword
//this will be used in react

//to return object it need to be wrapped in parenthesis , if we don't wrapt returning object in parenthesis it will give undefine as output

const addTwo = (num1, num2) => ({ username: "bochie" });

console.log(addTwo(10, 4));

const myArray = [2, 3, 4, 5];

// myArray.forEach()

/*An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions. */
const addThree = (num1, num2, num3) => num1 * num2 * num3;
let x = addThree(1, 2, 3);
console.log(x);
