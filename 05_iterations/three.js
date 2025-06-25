// array specific loops 

//for of 

// [ "" , "" , ""] // array of strings 
// [{ } ,{ }, { }] // array of objects 

const arr = [1,2,3,4,5]

for (const val of arr) {
  //  console.log(val)
}


const greetings = "hello world!"

for(const greet of greetings){
    if(greet == " "){
        continue;
    }
    // console.log(`each charecter is ${greet}`);
}

// Maps in JS
/* The Map object in JavaScript is a built-in data structure that stores key-value pairs. It allows any value (primitive or object) to be used as a key or value.
The Map constructor creates a new Map object, and it can be initialized with an iterable object whose elements are key-value pairs, such as an array of arrays. */
// refer to notion page for more theory
// map contains only unique value 
// it preserve the order in which are key value pairs are inserted 

const map = new Map()
map.set('IN' , "INdia")
map.set('USA' , "UNITED STATES OF AMERICA")
map.set('FR' , "FRANCE")

// console.log(map);

// syntax for printing key value pair individually from the map  using for of loop
for (const [key , value] of map) {
    // console.log(key , ':-' , value);
    
}

// applying for of loop on objects 

// const myObject = {
//     'game1' : "NFS",
//     'game2' : "Spiderman"

// }

// for (const [key , value] of myObject) {
//       console.log(key , ':-' , value);
// }

// // TypeError: myObject is not iterable








