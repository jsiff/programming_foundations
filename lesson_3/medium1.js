// let flint = "The Flintstones Rock!";

// const ten = (str => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(" ".repeat(i) + str);
//   }
// });

// ten(flint);

let munsterDescription = "The Munsters are creepy and spooky.";

// console.log(munsterDescription.replace(/([a-z]+) | ([A-Z]+)/g, (_, low, up) => {
//   return low ? low.toUpperCase() : up.toLowerCase();
// }));

// const isLowerCase = char => char.toLowerCase() === char;
// const swapCase = char => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

// const alternateCase = str => {
//   return [...str].map(swapCase).join('');
// };

// console.log(alternateCase(munsterDescription));

// console.log(munsterDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join(""));

function factors(number) {
  let divisor = number;
  let factors = [];
  // needs to catch 0 and negative values before loop
  if (number === 0 || number.toString().match(/^-\d+$/)) {
    console.log("Please enter non-zero and non-negative numbers only.");
    return;
  } else {
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor != 0);
  return factors;
  }
}
console.log(factors(-20));