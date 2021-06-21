// variable delcarations
//------------------------
var turn = 0;
var board = document.getElementById("board").children;

// NOTICE:
// This is my own solution for preventing palkying after game is won.
// Because I down't have players or turns, I'm using a boolen to determine 
// if a game is over.
//----------------------------------------------------------------------------
var gameOver = false;

// loop through all children of the board and attach event listeners
//----------------------------------------------------------------------
for (let i = 0; i < 9; i++) {
	board[i].addEventListener("click", takeTurn);
}// end of loop

function takeTurn() {
	if (this.value == "" && gameOver == false) {
		turn++;
		let symbol = (turn % 2 == 0 ? "O" : "X");
		this.value = symbol;
		
		// check to see if there is a win or a tie
		//------------------------------------------
		var winner = checkWin();
		if (typeof winner !== 'undefined') {
			gameOver = true; // change to gameOver state
			document.getElementById("sound").play(); // play sound
			document.getElementById("popup").style.backgroundImage = "none";
			document.getElementById("message").innerHTML = winner + " wins!";
			document.getElementById("container").style.display = "flex";
		} else if (turn == 9) {
			document.getElementById("sound").src = "audio/tie.mp3";
			document.getElementById("sound").play();
			document.getElementById("container").style.display = "flex";
			gameOver = true;
		}
	} // check if tile is empty
}// end of takeTurn

function checkWin() {

	// top row
	//------------------------
	if (board[0].value != "" && board[0].value == board[1].value && board[1].value == board[2].value) {
	return board[0].value;
	}

	// middle row
	//------------------------
	if (board[3].value != "" && board[3].value == board[4].value && board[4].value == board[5].value) {
	return board[3].value;
	}

	// bottom row
	//------------------------
	if (board[6].value != "" && board[6].value == board[7].value && board[7].value == board[8].value) {
	return board[6].value;
	}

	// right column
	//------------------------
	if (board[0].value != "" && board[0].value == board[3].value && board[3].value == board[6].value) {
	return board[0].value;
	}

	// middle column
	//------------------------
	if (board[1].value != "" && board[1].value == board[4].value && board[4].value == board[7].value) {
	return board[1].value;
	}

	// right column
	//------------------------
	if (board[2].value != "" && board[2].value == board[5].value && board[5].value == board[8].value) {
	return board[2].value;
	}

	// positive slope diagonal
	//------------------------
	if (board[6].value != "" && board[6].value == board[4].value && board[4].value == board[2].value) {
	return board[6].value;
	}

	// negative slope diagonal
	//------------------------
	if (board[0].value != "" && board[0].value == board[4].value && board[4].value == board[8].value) {
	return board[0].value;
	}
}// end of checkWin

function random() {
	do {
		var random = Math.floor(Math.random() * 9);
	} while(board[random].value && turn < 9);
	board[random].click();
} // end of random

function hidePopup() {
	document.getElementById("sound").pause(); // stop sound from playing
	document.getElementById("container").style.display = "none";
} // end of hidePopup