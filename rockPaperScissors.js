// rockPaperScissors.js

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'rocket') {
  return userInput;
 } else {
console.log('Error! Please type: rock, paper or scissors.');
 }
}

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3)
 switch (randomNumber) {
   case 0:
     return 'rock';
   case 1:
     return 'paper';
   case 2:
     return 'scissors';
 }
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
    } else { 
      return "Congratulations! You won!";
    }
  }

if (userChoice === 'paper') {
  if(computerChoice === 'scissors') {
    return "Sorry, computer won!";
  } else {
    return "Congratulations! You won!";
  }
}

if (userChoice === 'scissors') {
  if(computerChoice === 'rock') {
    return "Sorry, computer won!";
  } else {
    return "Congratulations! You won!";
  }
 }

if(userChoice === 'rocket') {
  return 'Congratulations! You won with the secret cheat code!';
}
};

const playGame = () => {
  const userChoice = getUserChoice('paper');
//const userChoice = getUserChoice('your choice');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()


// depending on what you choose and example of what console displays if running the code is:

You threw: paper
Computer threw: paper
This game is a tie!

// when you use the secret cheat code 'rocket' console will always display:

You threw: rocket
Computer threw: rock
Congratulations! You won with the secret cheat code!


