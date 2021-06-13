// let advice = "Few things in life are as important as house training your pet dinosaur.";
// advice = advice.replace("important", "urgent");
// console.log(advice);

// const numbers = [1, 2, 3, 4, 5];
// const reverse_num = numbers.slice().reverse();

// console.log(numbers);
// console.log(reverse_num); 
// console.log(numbers);

// const numSort = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(numbers);
// console.log(numSort);
// console.log(numbers);

// let reversedArray = [];

// numbers.forEach((number) => 
// {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;
// let number2 = 95; 

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";

// let otherWords = "Four score and ";
// console.log(otherWords + famousWords);
// console.log(otherWords.concat(famousWords));
// console.log(`${otherWords}${famousWords}`);
// let newArray = []
// let spliceArray = [1, 2, 3, 4, 5];
// spliceArray.splice(2,1);
// console.log(spliceArray);

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// // let newArray = [];

// let newArray = flintstones.flat();

// // flintstones.forEach(stone => {
// //   newArray = newArray.concat(stone);
// // });

// console.log(newArray);

// flintstones = [].concat(...flintstones);

// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);
// console.log(flintstones);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// // Object.entries(flintstones).filter(pair => pair[0] == "Barney").shift();
// let flintArray = Object.entries(flintstones)[2];
// console.log(flintArray);

// let numbers = [1, 2, 3, 4];
// let table = { field: 1, field2: 2, field3: 3, field4: 4 };

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members";
// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.match(/t/g).length);
console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
console.log(statement2.match(/t/g) || [].length);
