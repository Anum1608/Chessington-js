import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let movesList = [];

        if (this.player === Player.WHITE) {
            movesList.push(Square.at(location.row + 1, location.col))
            if(!this.hasPieceMoved){
                movesList.push(Square.at(location.row + 2, location.col));
            }
        } else {
            movesList.push(Square.at(location.row - 1, location.col))
            // return Square.at(location.row - 1, location.col)
            if(!this.hasPieceMoved){
                movesList.push(Square.at(location.row - 2, location.col));
            }        
        }
        return movesList;

    }
}
