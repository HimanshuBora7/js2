//passing objects and array to functions

function sayMyName() {
  console.log("b");
  console.log("o");
  console.log("c");
  console.log("h");
  console.log("i");
  console.log("e");
}
// sayMyName // only reference will be passed
// sayMyName(); //execution of function will also take place

function addTwoNumber(num1 , num2){
  return num1+num2
}

const result = addTwoNumber(10,10);
// console.log("Result" , result);

function loginUserMessage(username  ){
    if(username ===  null){
        return `please provide some arguments ,it can't be blank`

    }
    else{
    return `${username} just logged it `
    }
}

const mesg = loginUserMessage("bochie")

// console.log(mesg);
//when parameter are used and we don't pass any argument while executing the function then it generate undefined 

const mesg2 = loginUserMessage()

// console.log(mesg2);// undefined just logged in will be the msg printed

function calculateCartPrice(...num1){ // ... ->these three dots are called as both rest and spread operator its depend on the context in which we are using it here we want function to take infinite number of arguments coz we are not certain how many parameters will be passed 
return num1
}

// console.log(calculateCartPrice(100,200,300));

function calculateCartPrice1(val1 , val2, ...num1){
  return num1;
}

//In this approach first two values passed as aargument will be stored in the variable val1 and val2 variables and rest of the argumenets passed will be stored in array num1 
//so output will for this function where we are returning only num1 so except first two values rest will be returned in an array 

// console.log(calculateCartPrice1(100,200,300,400));

// Passing objects to functions 

const user = {
  Username : "bochie",
  price: 199
}

function handleObject (anyObject){
  console.log(`Username is ${anyObject.Username} and the price is ${anyObject.price}`)
}

// handleObject(user);

// passing obejct explicitly
handleObject({
  Username: "sam altman",
  price: 399
})

//passing arrays to functions

const myNewArray = [ 200,330,450,650];

function returnSecondArray(getArray){
  return getArray[1];
}

const a = returnSecondArray(myNewArray);

console.log(a);





