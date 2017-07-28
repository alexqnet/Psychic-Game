var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var computerGuess = computerChoices[Math.floor(Math.random() * 26)];
console.log(computerGuess);
var guesses = 9;



document.onkeyup = function(keyPressed) {

  	var keyPressed = keyPressed,
    charCode = keyPressed.keyCode,
    lettersGuessed = String.fromCharCode(charCode);

	var userGuess = event.key;

	if (userGuess == computerGuess) {
		wins++;
		console.log("You won a game!");
		alert("That's right! You guessed '" + computerGuess + "' correctly. You won a game!")
		computerGuess = computerChoices[Math.floor(Math.random() * 26)]
		console.log(computerGuess);
		document.getElementById("lettersGuessedID").innerHTML = "";
	}

	else {
		guesses--;
		document.getElementById("lettersGuessedID").innerHTML += lettersGuessed;

		}

	if (guesses == 0) {
		losses++;
		guesses=9;
		console.log("You lost a game.")
		alert("The answer was '" + computerGuess + "'. You lost a game.")
		computerGuess = computerChoices[Math.floor(Math.random() * 26)];
		console.log(computerGuess);
		document.getElementById("lettersGuessedID").innerHTML = "";
	}


var html = 
	"<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>You have " + guesses + " guesses left.</p>";

	document.querySelector ("#game").innerHTML = html;

	}

function resetGame() {
    location.reload();
}