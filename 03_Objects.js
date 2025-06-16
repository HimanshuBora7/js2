// objects can be declared in to ways 
//literals ki trh and constructors ki trh

//singleton : constructor se jo object bnte hai apni trh ka ek hi object hai mtlb iske instances nhi bna sakte 

//constructor se object bnega to singleton bnega 
//literal se object bnega to singleton object nhi bnega


//constructor method to make obejcts 
// Object.create


//object literals 

//symbol declaration 
//In JavaScript, a Symbol is a special data type used to create unique identifiers, often for object properties. Unlike strings or numbers, every Symbol is unique and can’t accidentally clash with other property names. They’re often used to add hidden or unique properties to objects.

const mySym = Symbol("key 1"); // here the text passed is optional and basically its purpose is to provide with some discription of  mySym

const JsUser = { 
    name: " bochie","Full name ": "bochan_aksuakbe",
    // mySym: " my key 1 ", // this declares symbol as string so this is not the right way 
   [mySym] : "my key 1 ", // sqaure brackets should be used both while accesing and declaring the sybols
    age: 19,
    location: "kasukabe",
    isLoggenIn: false,
    lastLoginDays: ["Monday","Saturday"]

}
//ways to access objects 

// console.log(JsUser.isLoggenIn);

//another way, which shld be used ideallly 
console.log(JsUser["email"]);

console.log(JsUser["Full name "]);

// console.log(JsUser.mySym)

// console.log(typeof(JsUser.mySym));
// console.log(JsUser[mySym]);

JsUser.age = 19;
// Object.freeze(JsUser) // finalise objects  key value pairs or structure cAN'T BE overridden oncce freezed

// console.log(JsUser);

//functions can be treated as variables in JS

JsUser.greeting = function(){
    console.log("Hello Js user world");
}
console.log(JsUser.greeting() );

JsUser.greeting2 = function(){
    console.log(`hello js user,${this["Full name "]} `);
}

console.log(JsUser.greeting2() );
