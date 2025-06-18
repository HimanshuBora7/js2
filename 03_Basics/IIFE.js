// Immediately Invoked Function Expression (IIFE)
// two reason for using IIFE
// function kay andar global variable koi problem na krein (Prevention of global scope pollution )

// immediate


(function two (){
    // named IIFI
    console.log('DB connexted');
}) (); // sytax for immediate execution or IIFE vch is function wrapped in parenthesis 

// but IIFE is invoked using this method but it doesn't know when to stop the context so it should be terminated with semicolon;

 // ()()// first parenthesis is where we will define function and second parenthesis is for execution call

((name)=> { 
    console.log(`DB connected Two ${name} `);
}) ("bochie"); // this way of writing function or arrow function will also work given previously immediately invoked function are terminated properly with semicolon 

// study difference between normal function and arrow function 









