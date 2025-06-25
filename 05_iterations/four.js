// Iterating the objects 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift : 'swift'
}

for (const key in myObject) { // this loop returns keys 

    // console.log(myObject[key]) // ways to print values
    
   // using keys we can access both the keys and values

   console.log(`${key } : ${myObject[key]}`);
}

// using for in loop in array produces only indexes of the element not the elements 
const myarr = [1,2,3]
for (const key in myarr) {
    console.log(key);
}

