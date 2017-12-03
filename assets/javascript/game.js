var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];

var psychicGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
var reset = function(){
		guessesLeft = 10;
		guessesMade = [];
	}

document.onkeyup = function(event){

	
	var userChoice = event.key;
	
	String.fromCharCode(event.keyCode).toLowerCase();

	

	if (event.keyCode >= 65 && event.keyCode <= 90) {

		if (guessesMade.includes(userChoice)) {
			alert("You pressed a duplicate key! Choose another");

				return;

		}


		if (userChoice === psychicGuess) {
			wins++;
			alert("You must be psychic!!!");
			// var guessesMade = [];
			// var guessesLeft = 10;
			// var psychicGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
			reset ();

		} else {
			guessesLeft --;
			guessesMade.push(userChoice);

		}

		if (guessesLeft === 0) {

			losses++;
			alert("You ain't got the gift!");
			reset();
			// var guessesLeft = 10;
			// var psychicGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
			// var guessesMade = [];

		

		}

	// reset();


	document.getElementById("#remainsTotal");
	remainsTotal.innerHTML = "Guesses Left:" + " " + guessesLeft;
	document.getElementById("#lossesTotal");
	lossesTotal.innerHTML = "Losses :(" + " " + losses;
	document.getElementById("#winsTotal");
	winsTotal.innerHTML = "Wins :)" + " " + wins;
	document.getElementById("#guesses");
	guesses.innerHTML = "Guesses So Far...." + " " + guessesMade.join(" ");





}













// document.querySelector("#psychicGame").innerHTML = html;


}