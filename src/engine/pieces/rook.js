import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';

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
            if( !board.getPiece(Square.at(location.row,i)) )
                movesList.push( Square.at(location.row,i) ) 
            else
                break
        }

        // left search
        for (let i=location.col-1; i>-1; i--){
            if( !board.getPiece(Square.at(location.row,i)) )
                movesList.push( Square.at(location.row,i) ) 
            else
                break
        }

        //down search
        for (let i=location.row+1;i<GameSettings.BOARD_SIZE;i++){
            if( !board.getPiece(Square.at(i,location.col)) )
                movesList.push( Square.at(i,location.col) ) 
            else
                break
        }

        // up search
        for (let i=location.row-1; i>-1; i--){
            if( !board.getPiece(Square.at(i,location.col)) )
                movesList.push( Square.at(i,location.col) ) 
            else
                break
        }
                
        return movesList;
    }
}
