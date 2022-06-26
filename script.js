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

    }
}

// Play game
function playGame() {
    const board = new Board();
    let moves = 0;

    while (moves <= 9) {
        // Even moves player is X, odd is O. 
        let player = (moves % 2 === 0) ? "X" : "O";
        // get player move
        let validMove = false;
        while (!validMove) {
            let space = 1; // Get player move
            validMove = board.addMark(space, player);
        }
        moves++;

        // After 5 moves, check to see if there is a winner
        if (moves >= 5) {
            // check for win condition
            // report winner if true and break
        }
        // After 9 moves, if a winner has not already been
        // declared, the game is a tie
        if (moves === 9) {
            // announce tie
            // break
        }

    }

}
