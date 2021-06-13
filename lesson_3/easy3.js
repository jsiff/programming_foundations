let numbers = [1, 2, 3, 4];

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

while (numbers.length) {
  numbers.pop();
}
console.log(numbers);