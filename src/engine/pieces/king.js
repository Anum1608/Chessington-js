import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        // location.row = 2, location.col = 3
        let movesList = [];

        for (let i=location.row-1; i<location.row+2; i++ ) {
            movesList.push(Square.at(i, location.col-1)); // 1, 2, 2, 2, 3, 2
            movesList.push(Square.at(i, location.col+1)); // 1, 4, 2, 4, 3, 4
        }
        // for ()

         
                
  /*      Square.at(location.row, location.col+1)
        Square.at(location.row, location.col-1)
        Square.at(location.row+1, location.col)*/

        return movesList;
    }
}
