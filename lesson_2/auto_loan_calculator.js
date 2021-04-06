const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt('Please use this to calculate your Auto Loan!');

while (true) {

  prompt('What loan amount do you require?');
  let loanAmt = readline.question();
  while (isInvalidNumber(loanAmt)) {
    prompt('Please enter a positive number');
    loanAmt = readline.question();
  }

  prompt("What is the interest rate?");
  prompt("Entry format: 2 for 2% or 7.5 for 7.5%");
  let interestRate = readline.question();
  while (isInvalidNumber(interestRate)) {
    prompt('Please enter a positive number');
    interestRate = readline.question();
  }

  prompt("What is loan duration in years?");
  let years = readline.question();
  while (isInvalidNumber(years)) {
    prompt('Please enter a positive number');
    years = readline.question();
  }

  let annualRate = Number(interestRate) / 100;
  let monthyRate = Number(annualRate) / 12;
  let months = Number(years) * 12;

  let payment = Number(loanAmt) * (monthyRate /
              (1 - Math.pow((1 + monthyRate), (-months))));

  prompt(`Your monthly payment is: $${payment.toFixed(2)}`);

  prompt("Would you like to enter another loan calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break; // program doesn't end without break statement
}
