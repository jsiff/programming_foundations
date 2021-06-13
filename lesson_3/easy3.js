// let numbers = [1, 2, 3, 4];

// let i = 0;

// while (i < numbers.length) {
//   numbers.pop();
//  }

// console.log(numbers);

// do {
//   numbers.shift();
// }
// while (numbers.length > i);

// console.log(numbers);

// for (x in numbers) {
//   delete numbers[x];
// }

// console.log(numbers);

// numbers.length = 0;
// console.log(numbers);

// numbers.splice(0, numbers.length);
// console.log(numbers);

// while (numbers.length) {
//   numbers.pop();
// }
// console.log(numbers);

// Question 2

// console.log([1, 2, 3] + [4, 5]); // converts array to string object 34 

// Question 3

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // "hello there"

// Question 4

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
console.log(arr2);

// Question 5

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

// const isColorValid = color => color === "blue" || color === "green";

// const isColorValid = color => ["blue", "green"].includes(color);