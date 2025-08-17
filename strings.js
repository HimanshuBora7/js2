//console.log("hello world")
//string are objets in js

const gameName = new String("hello world");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf("e") + 1);

//slicing the string
const gameName1 = new String("Bochan-kasukabe");

const sliced_string = gameName1.substring(0, 6);
console.log(sliced_string);

const newStringOne = "           bochie     ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/himanshubora%7";
console.log(url.replace("%", "-"));

console.log(gameName1.split("-"));
