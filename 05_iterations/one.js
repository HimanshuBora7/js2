//for loop 
const array = [1,2,3,4,5];
for(let index = 0;index < array.length;index++){
    const element = array[index];
    console.log(element)
}

//print table

for(let i = 0 ;i <= 10;i++ ){
 console.log("outer loop : "+ i);
 for(let j = 1 ; j<=10;j++){
 console.log(i + "*"+ j + " = " + i*j);
 }
}

// break and continue 

for(let i = 1 ; i<10 ; i++){
    if(i == 5){
        console.log("detected");
        // break;
        continue;
    }
    console.log("value of i is "+ i);

}









