const score = 400 //simple declaration //primitive number 

const balance = new Number(100); // explicit declaration
/*
A Number object in JavaScript is an object wrapper around a numeric value, created using the Number constructor. It allows you to work with numbers as objects, giving access to methods and properties defined on the Number prototype, unlike primitive numbers.
Key Points
Creation:
A Number object is created using the new Number() constructor, e.g., const num = new Number(100);.

This wraps a primitive number (like 100) into an object.

*/
console.log(balance);
console.log(score.toString());
console.log(score.toFixed(2)); 

const otherNumber = 23.8923

console.log(otherNumber.toPrecision(3)) // round off 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//for displaying numbers in INdian nummber system

//++++++++++++++++--MATHS--+++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.6)); //round off
console.log(Math.ceil(4.2)) // ayhting above 4 will be shocased as next integer hence referred as cielieng value of that integer
console.log(Math.floor(55.9)) // as the name suggest floor value of number will be showacased

console.log(Math.min(5,4,3,2,1));
console.log(Math.max(1,2,3,4,5));

console.log(Math.random() )//output will be between 9 and 1 default
//we alter random function for our purpose and doing some calculation by assuming the default base outputs vcg r b/w 0 and 1
console.log(Math.floor((Math.random())*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1  ) )+min)


