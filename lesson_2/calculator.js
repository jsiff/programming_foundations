// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to the calculator!");

prompt("What is the first number?");
let number1 = readline.question();

prompt("What is the second number?");
let number2 = readline.question();

prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

let output;
switch (operation) {
  case '1':
  output = Number(number1) + Number(number2);
  break;
  case '2':
  output = Number(number1) - Number(number2);
  break;
  case '3':
  output = Number(number1) * Number(number2);
  break;
  case '4':
  output = Number(number1) / Number(number2);
  break;
}

prompt(`The result is ${output}.`);