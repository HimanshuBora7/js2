//syantaxes of do while and while loop
// while(condition){
//  --code--;
//  }

let myArray = [' flash' , ' batman' ,' superman']

let arr = 0;

while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`)
    arr++;
}

//do while : runs atleast one because condition is checked at the end of the code 

let score = 11;

do{
    console.log(`score is ${score}`);
    score++;
} while(score <= 10)



