import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }


    /*
    can move laterally
    can move laterally
    cannot make any other moves
    cannot make any other moves
    cannot move through friendly pieces
    cannot move through opposing pieces
    */
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let movesList = [];

        //right search
        for (let i=location.col+1;i<GameSettings.BOARD_SIZE;i++){
            let rightSquare = Square.at(location.row,i)
            let rightPiece = board.getPiece(rightSquare)
            if( !rightPiece )
                movesList.push( rightSquare ) 
            else if (rightPiece && rightPiece.player !== this.player && !(rightPiece instanceof King)){
                movesList.push( rightSquare )
                break
            }
            else
                break
        }

        // left search
        for (let i=location.col-1; i>-1; i--){
            let leftSquare = Square.at(location.row,i)
            let leftPiece = board.getPiece(leftSquare)
            if( !leftPiece )
                movesList.push( leftSquare ) 
            else if (leftPiece && leftPiece.player !== this.player && !(leftPiece instanceof King)){
                movesList.push( leftSquare )
                break
            }
            else
                break
        }

        //down search
        for (let i=location.row+1;i<GameSettings.BOARD_SIZE;i++){
            let downSquare = Square.at(i,location.col)
            let downPiece = board.getPiece(downSquare)
            if( !downPiece )
                movesList.push( downSquare ) 
            else if (downPiece && downPiece.player !== this.player && !(downPiece instanceof King)){
                movesList.push( downSquare )
                break
            }
            else
                break
        }

        // up search
        for (let i=location.row-1; i>-1; i--){
            let upSquare = Square.at(i,location.col)
            let upPiece = board.getPiece(upSquare)
            if( !upPiece )
                movesList.push( upSquare ) 
            else if (upPiece && upPiece.player !== this.player && !(upPiece instanceof King)){
                movesList.push( upSquare )
                break
            }
            else
                break
        }

        return movesList;
    }
}
