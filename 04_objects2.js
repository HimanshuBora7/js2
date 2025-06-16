//const minderUser = new Object() // singleton object
 
const minderUSer = {} // non singleton object 
minderUSer.id = "123abc";
minderUSer.name = " sammay";
minderUSer.isloggedIn = false;

// console.log(minderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bochan",
            lastname:"kasukabe"
        }
    }
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: " a " , 2: " b"};
const obj2 = {3: "c" , 4 : " d"}

// const obj3 = { obj1 , obj2} //this will lead to inclusion as two seprate objects in object 3 but merging of two array have not been achived 
// const obj3 = Object.assign({}, obj1,obj2)

//another syntax
const obj3 = {...obj1, ...obj2 }
console.log(obj3);

const users = [ //array of objects 
    {
        id: 1,
        email: "bocie@gmail.com"
           
    },
    {
        id:2,
        email: "thor89@gmail.com"
    }

]

console.log(users[0].email)
console.log(minderUSer);
console.log(Object.keys(minderUSer)); //this return all the keys in the form of array 

console.log(Object.values(minderUSer));
console.log(Object.entries(minderUSer)); // return a big array which consist of key value pair in the form of individual arrays

console.log(minderUSer.hasOwnProperty('isloggedIn')); //return a boolean answer after checking if the entered property is in the defined object exists or not 




