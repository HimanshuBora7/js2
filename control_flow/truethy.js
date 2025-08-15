// truthy and falsy values in js

// https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

// const userEmail = "bochie@gmail.com"
const userEmail = []; //this empty array will result in true value

//here we have considered that userEmail if consists some literal then it is true ,thus this is called truthy value
if (userEmail) {
  // console.log("Got user email")
} else {
  // console.log("Don't have user email");
}

// falsy values

// false , 0 , -0,BigInt 0n ,"", null,undefined,Nan

//truthy  values

//"0" , 0 is falsy but 0 inside string is truthy , 'false'(False is Falsy but inside string it is truthy ). " ", [] (empty array ), {} (empty object ) ,function(){} ( empty function is also truthy value)

//detecting an empty array

// if (userEmail.length === 0) {
//     console.log("Array is empty");

// }

//detecting an empty object
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //console.log("Object is empty");
}

// Nullish Coalescing operator (??) : null undefined

//this way if we get null or undefined values instead of assigning them we can use safe values for our code to work

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
