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

            let firstSquare = Square.at(location.row + 1, location.col)
            let secondSquare = Square.at(location.row + 2, location.col)

            if ( !board.getPiece(firstSquare) )  {
                movesList.push(firstSquare)
                if(!this.hasPieceMoved){
                    if ( !board.getPiece(secondSquare) )  {
                        movesList.push(secondSquare);
                    }
                }
            }
        } else {

            let firstSquare = Square.at(location.row - 1, location.col)
            let secondSquare = Square.at(location.row - 2, location.col)

            if ( !board.getPiece(firstSquare) )  {
                movesList.push(firstSquare)
                if(!this.hasPieceMoved){
                    if ( !board.getPiece(secondSquare) )  {
                        movesList.push(secondSquare);
                    }
                } 
            }       
        }
        
        return movesList;

    }
}
