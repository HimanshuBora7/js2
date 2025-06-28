// reduce method 
// refer to notion notes for theory 
// the reduce () method executes a user supplied "reducer" callback 
// function on each element of the array,in order, passing in the return 
// value from the calculation on the preceeding element. The final result of running the reducer across all elements of the array is a single value 
//accumulator and current value r passed in call back function  

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curr_val) {
//    console.log("accumulator " , acc);
//    console.log("current value " , curr_val);
   
   
//     return acc+curr_val;
// },0) //initial value is the value we pass right after comma 

//using arrow function 

const myTotal = myNums.reduce((acc , curr_val) => acc+curr_val,0 )

console.log(myTotal);

const shopping_cart = [ 
    {
        itemName: " js course",
        price: 200
    },
    {
        itemName: " ruby course",
        price: 2000
    },
    {
        itemName: " py course",
        price: 250
    },
    {
        itemName: " c course",
        price: 500
    },
]

//sum all the prices using reduce function
 
const sumTotal = shopping_cart.reduce((acc,curr_val) => acc+curr_val.price,0)

console.log(sumTotal);
