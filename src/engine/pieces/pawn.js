import Player from '../player';
import Square from '../square';
import King from './king';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    /*can only move one square up if they have already moved
    can move one or two squares up on their first move
    cannot move if there is a piece in front
    cannot move two squares if there is a piece two sqaures in front 
    can move diagonally if there is a piece to take
    cannot take a friendly piece
    cannot take the opposing king*/

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

        // can move diagonally if there is a piece to take
        // cannot take a friendly piece
        // cannot take the opposing king
        let diagonalSquare1= Square.at(location.row+1, location.col+1)
        let diagonalSquare2= Square.at(location.row+1, location.col-1)
        let diagonalSquare3= Square.at(location.row-1, location.col+1)
        let diagonalSquare4= Square.at(location.row-1, location.col-1)
        let diagonalPiece1 = board.getPiece( diagonalSquare1)
        let diagonalPiece2 = board.getPiece( diagonalSquare2)
        let diagonalPiece3 = board.getPiece( diagonalSquare3)
        let diagonalPiece4 = board.getPiece( diagonalSquare4)




        if (diagonalPiece1) { 
            if (diagonalPiece1.player !== this.player ){
                if (!(diagonalPiece1 instanceof King))
                    movesList.push(diagonalSquare1);
            }
        }
        if (diagonalPiece2) { 
            if (diagonalPiece2.player !== this.player ){
                if (!(diagonalPiece2 instanceof King))
                    movesList.push(diagonalSquare2);
            }
        }
        if (diagonalPiece3) { 
            if (diagonalPiece3.player !== this.player ){
                if (!(diagonalPiece3 instanceof King))
                    movesList.push(diagonalSquare3);
            }
        }
        if (diagonalPiece4) { 
            if (diagonalPiece4.player !== this.player ){
                if (!(diagonalPiece4 instanceof King))
                    movesList.push(diagonalSquare4);
            }
        }

        return movesList;

    }
}
