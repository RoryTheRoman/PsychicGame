var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();

var psychicGuess = compChoice[Math.floor(Math.random() * compChoice.length)];


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];

//^^defining varibales^^//
var changeGuessesLeft = function() {
	

document.getElementById("#remainsTotal");
remainsTotal.innerHTML = "Guesses Left:" + " " + guessesLeft;

}
changeGuessesLeft();

//^^establishing computer random guess of array^^//

document.onkeyup = function(event){
	var userGuess = event.key;
	guessesMade.push(userGuess);
	document.getElementById("#guesses");
	guesses.innerHTML = "Guesses So Far...." + " " + userGuess;

	// var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// guessedMade.push(userGuess);
}

// document.onkeyup();

// var winTally = document.getElementById("winsTotal");
// winsTotal.innerHTML = "Wins :)" + " " ++;


if (userGuess === compChoice) {
	wins = 0 + 1;
	// i need the computer to choose a new letter here
	reset.guessesLeft
}
	

