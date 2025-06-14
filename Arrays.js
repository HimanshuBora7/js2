// Array in javascript 
//there is no boundation here to store only similar kind of data type in an array
//refer to mdn array in js page
//read abt shallow and deep copy 

const myArr = [0,1,2,3,4,5];
const myHeros = ["thor" , " bochie"];

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr[0]);

// Array methods

myArr.push(6); // adds value to teh array
// console.log(myArr) // printing all of the array 
myArr.pop() // removes last element from the array
// console.log(myArr);

myArr.unshift(9); // for insertion at start of the array i.e. 0th index
// console.log(myArr);

myArr.shift() // to remove the first element of the array 
// console.log(myArr);

console.log(myArr.includes(9)) //return boolean type

// console.log(myArr.indexOf(3));   // returns the index of the parameter passed if it doesn't exist it returns -1
// console.log(myArr.indexOf(19));

const newArr = myArr.join() // join binds the data from array on which this is applied to new array but in the form of string

// console.log(myArr); // output is in Integer data type
// console.log(newArr); // output is in string data type 
// console.log(typeof(newArr));

// slice . splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3) //last one is not included vch means 3rd position element will not be included

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1,3) 

console.log("c" ,myArr);
console.log(myn2);

// splice operation  changes the original array also but slice do not (important)

