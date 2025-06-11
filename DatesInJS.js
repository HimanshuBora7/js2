//dates 

let myDate = new Date()

console.log(myDate.toString()); //different methods to get different formats
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate) // object will be the output hence dates in js are objects

let myCreatedDate = new Date(2023,0,23);
//months are started from 0 in javaScript
console.log(myCreatedDate.toDateString());

//time stamps
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date ();
console.log(newDate.getHours() );

//"`${newDate.getDay}` and the time"

newDate.toLocaleString('default',{
  weekday: "long",
  
})

/*
JavaScript method call that formats a Date object (newDate) into a string based on locale-specific conventions, specifically outputting the full name of the weekday.
Here’s a breakdown:
newDate:
This is a JavaScript Date object, which represents a specific moment in time. For example, newDate could be something like new Date() (current date and time) or a specific date like new Date('2025-06-11').

.toLocaleString():
This is a built-in method of the Date object in JavaScript. It returns a string representation of the date, formatted according to the specified locale and options.

Syntax: date.toLocaleString([locales], [options])
locales: A string or array of strings specifying the language and region (e.g., 'en-US' for American English, 'default' to use the system’s default locale).

options: An object that customizes the output format.

'default':
The first argument specifies the locale. Using 'default' means the method will use the system’s default locale settings (e.g., the user’s browser or system language). For example, if the system is set to American English, it behaves like 'en-US'.

{ weekday: "long" }:
The second argument is an options object that customizes the output. Here, it specifies that only the weekday part of the date should be included in the output, and it should be in the "long" format.

The weekday option can take three values:
"long": The full name of the day (e.g., "Wednesday").

"short": A shortened form (e.g., "Wed").

"narrow": A minimal form (e.g., "W"), though this may vary by locale.

Since { weekday: "long" } is specified, the output will be the full name of the day of the week for the date stored in newDate.

Example
javascript

const newDate = new Date('2025-06-11'); // June 11, 2025
console.log(newDate.toLocaleString('default', { weekday: "long" }));

If the system’s default locale is 'en-US', the output will be "Wednesday", because June 11, 2025, was a Wednesday.

If the locale is 'es-ES' (Spanish), it might output "miércoles".

Key Points
The output depends on the date in newDate and the system’s default locale (since 'default' is used).

The { weekday: "long" } option ensures only the full weekday name is returned, ignoring other date components like the day, month, or time.

If you want a specific locale, you can replace 'default' with something like 'en-US', 'fr-FR', etc.

Notes
The toLocaleString method is powerful for internationalization, as it respects cultural differences in date formatting.

If newDate is invalid (e.g., new Date('invalid')), the method may throw an error or return an invalid result, depending on the environment.

Since the current date is June 11, 2025 (a Wednesday), running this code today with new Date() would likely return "Wednesday" in English locales.


*/ 

/*"Objects in turn are the instance of class":
This is partially correct but not entirely accurate for JavaScript. In JavaScript:
An object is a collection of key-value pairs (properties and methods).

Objects can be instances of a class (created using the new keyword with a class or constructor function), but not all objects are instances of classes. For example:
Objects created via object literals ({}), Object.create(), or other means are not necessarily tied to a class.

Before ES6 (2015), JavaScript used constructor functions and prototypes instead of classes, and many objects are still created this way.

 */


/* "Objects can be instances of a class or constructor function, but they can also be created independently."*/

/*A more precise definition could be:
Methods are functions that are properties of an object, typically used to define the object's behavior.

Objects are data structures containing properties and methods. They may be instances of a class (in modern JavaScript) or a constructor function, or they may be created without a class (e.g., via object literals).

 */

/*In JavaScript, a class is a blueprint for creating objects with shared properties and methods. Classes were introduced in ECMAScript 2015 (ES6) and provide a cleaner syntax for creating constructor functions and handling inheritance.

 */