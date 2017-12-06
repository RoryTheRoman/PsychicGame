//DEFINING VARIABLES

var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];

//DEFINING PSYCHIC GUESS AS A RANDOM COMPUTER CHOICE

var psychicGuess = compChoice[Math.floor(Math.random() * compChoice.length)];

//SETTING A RESET FUNCTION

var reset = function(){
		guessesLeft = 10;
		guessesMade = [];
		psychicGuess = [];
	}

//STARTING THE GAME

document.onkeyup = function(event){
	
//DEFINING USER CHOICE AS THE KEYSTROKE

	var userChoice = event.key;

//CHANGING INPUT FROM USER TO LOWER CASE

	String.fromCharCode(event.keyCode).toLowerCase();

//LIMITING WHAT CHARACTERS THE USER CAN PRESS ON THE KEYBOARD	

	if (event.keyCode >= 65 && event.keyCode <= 90) {

//CREATING AN ALERT IF YOU CHOOSE THE SAME KEY TWICE

		if (guessesMade.includes(userChoice)) {
			alert("You pressed a duplicate key! Choose another");

				return;

		}

//GAMEPLAY IF/ELSE:

		if (userChoice === psychicGuess) {
			wins++;
			alert("You must be psychic!!!");
			
			reset ();

		} else {
			guessesLeft --;
			guessesMade.push(userChoice);

		}

		if (guessesLeft === 0) {

			losses++;
			alert("You ain't got the gift!");
			reset();
			

		

		}

	
//WRITING TO THE HTML

	document.getElementById("#remainsTotal");
	remainsTotal.innerHTML = "Guesses Left:" + " " + guessesLeft;
	document.getElementById("#lossesTotal");
	lossesTotal.innerHTML = "Losses :(" + " " + losses;
	document.getElementById("#winsTotal");
	winsTotal.innerHTML = "Wins :)" + " " + wins;
	document.getElementById("#guesses");
	guesses.innerHTML = "Guesses So Far...." + " " + guessesMade.join(" ");





}















}