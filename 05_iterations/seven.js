const myNums = [ 1,2,3,4,5,6,7,8,9]

//using map method , this also requires a call back function 

//we want to add 10 to every element present in the array 
// map method returns the values 

// let newNUms = myNums.map((num) => num + 10 )
// console.log(newNUms);

// chaining :using 2-3 methods directly 

const newNums = myNums
                 .map((num) => num*10 )
                 .map((nums) => nums+1) // this operation will be applied on the new array created by previous method 
                 .filter((nums) => nums >=40) //filter is for true/false things or for conditional things 
console.log(newNums);

