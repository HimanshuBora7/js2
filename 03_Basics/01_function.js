

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

console.log(mesg);
//when parameter are used and we don't pass any argument while executing the function then it generate undefined 

const mesg2 = loginUserMessage()

console.log(mesg2);// undefined just logged in will be the msg printed








