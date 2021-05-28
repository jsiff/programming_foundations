const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const GAME_WIN = {
  rock: ['scissors', 'lizard'],
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper'],
};

let playerScore = 0;
let compScore = 0;
const WINS_NEEDED = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}


function playerVictor(choice, computerChoice) {
  return GAME_WIN[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  if (playerVictor(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

function scoreCount(choice, computerChoice) {
  if (playerVictor(choice, computerChoice)) {
    playerScore++;
  } else if (choice === computerChoice) {
    // a tie registers nothing
  } else {
    compScore++;
  }

}

function displayGrandWinner() {
  if (playerScore === WINS_NEEDED) {
    prompt('You are the Grand Winner!');
  } else if (compScore === WINS_NEEDED) {
    prompt('The computer is the victor!');
  } else {
    // empty
  }
}

while (true) {
  prompt(`Choose one of the following: r for rock, p for paper, sc for scissors
  l for lizard or sp for spock`);
  const OPTS = ['r', 'p', 'sc', 'l', 'sp'];

  let option = readline.question().toLowerCase();
  let choice;

  if (!OPTS.includes(option)) {
    prompt("That's not a valid choice");
    option = readline.question().toLowerCase();
  }

  switch (option) {
    case 'r':
      choice = VALID_CHOICES[0];
      break;
    case 'p':
      choice = VALID_CHOICES[1];
      break;
    case 'sc':
      choice = VALID_CHOICES[2];
      break;
    case 'l':
      choice = VALID_CHOICES[3];
      break;
    case 'sp':
      choice = VALID_CHOICES[4];
      break;
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
g
  displayWinner(choice, computerChoice);
  scoreCount(choice, computerChoice);
  displayGrandWinner();

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}