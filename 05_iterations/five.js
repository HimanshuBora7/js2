// for each loop

const coding = ["js" , "ruby","java",'python','cpp'];

// for each loop requires a call back function as argument 
//call back functions are first without name 
//refer to notion notes 

// basic syntax for forEach 

//array_name.forEach(function (any_name){
  // console.log(any_name );
// })

// any_name variable will be holding the elements , so that will be used as parameter inside the function 


// coding.forEach( function (item){
//     console.log(item)
// })

//variations using arrow function instead of function

// coding.forEach((item) => {
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);
    
}
//passing another function as parameter to forEach Loop
//only passing of reference of function is require , we should not include parenthesis vch means execution

// coding.forEach(printMe)

// forEach loop method besides the item , it also includes or returns array index , and full array  

// coding.forEach((item , index ,arr) => {
//     console.log(item , index ,arr);
    
// })

const myCoding = [
    {
        language_name : " javaScript",
        language_file_name: " .js"
    },
    {
        language_name : "C",
        language_file_name: " .c"
    },
    {
        language_name : " java",
        language_file_name: " .java"
    },

]

// iteration over the array containing objects 

myCoding.forEach((item) => {
    console.log(item.language_file_name);
    
})



