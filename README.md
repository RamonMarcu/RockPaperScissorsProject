# JavaScript Syntax: Rock Paper or Scissors Project
# Key concepts used in this projects: Control flow (conditionals), Switch Statements, If/else statements and prompt-sync (optionally added)

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

(1) Get the user’s choice.
(2) Get the computer’s choice.
(3) Compare the two choices and determine a winner.
(4) Start the program and display the results.


(I) If you download the rockPaperScissors.js script and run it in terminal with: node rockPaperScissors.js, the game will run with an established const userChoice = getUserChoice('paper'); which is 'paper' in this case. Hence, you can play it by changing the script, more precisely the const userChoice = getUserChoice('paper'); by changing 'paper' to your preference such as 'rock', 'scissors' or the secret cheat code 'rocket'.

(II) If you download RPS.js and run it in your terminal with: node RPS.js, you'll be able to write your choice in terminal ( I added user input using prompt-sync), therefore, you can choose your variant hence it allows you to actually play the game.





Tasks (14/14)

1.The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts. Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput. Having the primary concepts Control flow (conditionals), Switch Statements, If/else statements, the tasks of this project do not include to use prompt-sync. 

(a) By following the project tasks you'll have to change the code to actually play the game; if you download the rockPaperScissors.js script and run it in terminal with: node rockPaperScissors.js, the game will run with an established const userChoice = getUserChoice('paper'); which is 'paper' in this case. Hence, you can play it by changing the script, more precisely the const userChoice = getUserChoice('paper'); by changing 'paper' to your preference such as 'rock', 'scissors' or the secret cheat code 'rocket'. 

(b) Therefore, I added user input using prompt-sync. If you download RPS.js and run it in terminal with: node RPS.js, you can choose your variant in terminal therefore it allows you to actually play the game without making any changes to its code. 




2.Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.

You can use code like this:

userInput = userInput.toLowerCase();




3.When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.

Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.




4.Test the function by calling it with valid and invalid input, and printing the results to the console.

You can delete this when you know your function works.


Stuck? Get a hint

5.Now we need to have the computer make a choice.

Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2; then, depending on the number, return either 'rock', 'paper', or 'scissors'.




6.Test the function by calling it multiple times and printing the results to the console.

You can delete this when you know your function works.




7.Now it’s time to determine a winner.

Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.

Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.

 


8.If the game is not a tie, you’ll need to determine a winner.

Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.




9.Next, write another if statement for if the userChoice is 'paper'.

Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.




10.Next, write yet another if statement for if the userChoice is 'scissors'.

Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.




11.Don’t forget to test your function!

Check off this task when you’ve finished testing.




12.Everything is set up. Now you need to start the game and log the results.

Create a function named playGame.

Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.

Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().

Under both of these variables, use console.log to print them to the console.




13.Finally, let’s determine who won.

Inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.

Then, to start the game, call the playGame() function on the last line of your program.




14.Make this game better by adding a secret cheat code. If a user types 'rocket' as their choice, then make sure they win, no matter what.


![Screenshot 2023-02-28 at 20 07 09](https://user-images.githubusercontent.com/70721540/221942056-268a8642-2d4e-4cc9-b5bb-3231605916c0.png)
