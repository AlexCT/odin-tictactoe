// The Odin Project - Tic Tac Toe
// Alex Tresselt 6/22/2022

// Board class to represent the Tic Tac Toe board:
// 1 | 2 | 3
// ---------
// 4 | 5 | 6
// ---------
// 7 | 8 | 9
class Board  {
    // Creates a new Board
    constructor() {
        this.board = [1,2,3,4,5,6,7,8,9];
    }
    // Board.space(x) will return the contents of the board
    // at position x
    space(position) {
        return this.board[position];
    }
    // Board.addMark(s, p) will set the player's move at
    // position s and return True, unless the space has already
    // been marked and then will return False.
    addMark(space, player) {
        space = space - 1; // Correct for zero-indexed array
        if (space < 0 && space > 8) {
            return false;
        }
        if (this.board[space] === "X" || this.board[space] === "O") {
            return false;
        } else {
            this.board[space] = player
            return true;
        }
    }
    // Board.winner() Returns 'X' or 'O' if there is a winner,
    // 'N' if there is not.
    winner() {
        // Row wins
        if (this.board[0] === this.board[1] && this.board[0] === this.board[2]) {
            return this.board[0];
        }
        if (this.board[3] === this.board[4] && this.board[3] === this.board[5]) {
            return this.board[0];
        }
        if (this.board[6] === this.board[7] && this.board[6] === this.board[8]) {
            return this.board[0];
        }
        // Column wins
        if (this.board[0] === this.board[3] && this.board[0] === this.board[6]) {
            return this.board[0];
        }
        if (this.board[1] === this.board[4] && this.board[1] === this.board[7]) {
            return this.board[0];
        }
        if (this.board[2] === this.board[5] && this.board[2] === this.board[8]) {
            return this.board[0];
        }
        // diagonal wins
        if (this.board[0] === this.board[4] && this.board[0] === this.board[8]) {
            return this.board[0];
        }
        if (this.board[2] === this.board[4] && this.board[2] === this.board[6]) {
            return this.board[0];
        }
        // No winner
        return "N";
    }
}

// Play game
function playGame(board, moves) {

    if (moves <= 9) {
        // Even moves player is X, odd is O. 
        let player = (moves % 2 === 0) ? "X" : "O";
        // get player move
        let validMove = false;
        while (!validMove) {
            var space = prompt("Enter move (1-9) for player: " + player);
            validMove = board.addMark(space, player);
        }
        // Mark move on board
        let div = document.getElementById(space);
        div.textContent = player;
        div.style.color = "black";

        moves++;

        // After 5 moves, check to see if there is a winner
        if (moves >= 5) {
            if (board.winner() !== "N") {
                alert("Player " + player + " wins!");
            }
        }
        // After 9 moves, if a winner has not already been
        // declared, the game is a tie
        if (moves === 9) {
            alert("Tie Game!");
        }

    }

}

var m = 0;
const board = new Board();
var start = document.getElementById("startbutton");
start.onclick = function() {
    playGame(board, m);
    m++;
    start.textContent = "Next Move";
};