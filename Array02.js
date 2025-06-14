const marvel = [" thor" , "iron man " , "HUlk"]
const Dc = ["super man ","flash", " batman" ]

// marvel.push(Dc);
// console.log(marvel); 

//instead of merging array this leads to inclusion of one array in another araay ,here the new array which inserted will be treated as 4th element of marvel array which in turn consist of array data type so arrays in js can take any kind if data it is not neccessary they shld all be same


//so syntax for accessing the insereted arrays element will be like og_arr[3][index of element from inserted array which we want to access ]

// console.log(marvel[3][2]); //batman will be the output

//concat merges two array and return a new combined array 

// const newArray_combined = marvel.concat(Dc); 

// console.log(newArray_combined);


//spread operator
//similar to concat method
// const all_new_heroes = [...marvel, ...Dc];
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//depth is passed as parameter to this method to how deep the elements shld be looken before flating out 
//passing infinity will flaten whole of the array
const real_Another_array = another_array.flat(Infinity)

console.log(real_Another_array);

console.log(Array.isArray("bochie"))

//to check if the passed parameter as array or not


console.log(Array.from("bochie"))

//this will convert the passed things(it cld be anything like objects strings etc) to array

console.log(Array.from({name : "bochie"}))

// intresting case as it will return empty array because here we have to explicitly tell the from method ki  of which out of key n value it shld made array of 


let score1 = 100
let score2= 200
let score3 = 300

//conversion of these arrays into elements of an array

console.log(Array.of(score1,score2,score3));