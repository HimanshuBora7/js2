const coding_language = ["js", "ruby", "java", "C", "python"];

//using arrow function
const values = coding_language.forEach((item) => {
  console.log(item);
  //   return item;
});

// for (let x of coding_language) {
//   console.log(x);
// }
// console.log(values); // return type undefined

// // forEach doesn't return anything

const myNums = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10];

//filter also require call back
//filter returns values based on some condition

//if scope opens then we have to use the return statement
const newNums = myNums.filter((num) => num > 7);
console.log(newNums);

//other way of declaring without using the scope

const myNumsOdd = myNums.filter((odd_item) => !(odd_item % 2 == 0));
console.log(myNumsOdd);

//using filter inside forEach loop

// const newNums2 = [ ]

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums2.push(num)
//     }
// })

// console.log(newNums2);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1991,
    edition: 2004,
  },
  {
    title: "Book two",
    genre: "NON Fiction",
    publish: 1992,
    edition: 2005,
  },
  {
    title: "Book three",
    genre: "history",
    publish: 1993,
    edition: 2006,
  },
  {
    title: "Book four",
    genre: "geography",
    publish: 1994,
    edition: 2007,
  },
  {
    title: "Book Five",
    genre: "social science",
    publish: 1995,
    edition: 2008,
  },
  {
    title: "Book Six",
    genre: "history",
    publish: 1996,
    edition: 2009,
  },
];
// console.log(typeof books);
const userBooks = books.filter((bk) => bk.genre === "history");

// console.log(userBooks);

const PublishAfter2k = books.filter((bkP) => {
  return bkP.publish >= 1995 && bkP.genre === "history";
});
console.log(PublishAfter2k);
