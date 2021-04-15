// rockPaperScissors.js

const prompt = require('prompt-sync')({sigint: true});


const getUserChoice = userInput => { userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'rocket') {
  return userInput;
 } else {
console.log('Error! Please type: rock, paper or scissors.');
 }
};

const userInput = prompt('Welcome! 👋  What is your choice?  Rock 🧱 , Paper 📄 or Scissors ✂️  ?');

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
    return '👾 This game is a tie! 👾 ';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return " 🤖 Sorry, computer won! 🤖 ";
    } else { 
      return "Congratulations! 🎉 You won! 🎉 ";
    }
  }

if (userChoice === 'paper') {
  if(computerChoice === 'scissors') {
    return " 🤖 Sorry, computer won! 🤖 ";
  } else {
    return "Congratulations! 🎉 You won! 🎉 ";
  }
}

if (userChoice === 'scissors') {
  if(computerChoice === 'rock') {
    return " 🤖 Sorry, computer won! 🤖 ";
  } else {
    return "Congratulations! 🎉 You won! 🎉 ";
  }
 }

if(userChoice === 'rocket') {
  return 'Congratulations! 🎉 You won with the secret cheat code! 🚀 ';
}
};


const playGame = () => {
  const userChoice = userInput;
//const userChoice = getUserChoice('your choice');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()



/* If you download RPS.js and run it in terminal with: node RPS.js, the console will firstly display 3 raws:

You threw: (your choice)
Computer threw: (computer's choice)
(The decision)

By using the secret cheat code 'rocket' you'll always win against the computer's choice 

To play it again you'll have to run it again with: node RPS.js */


