import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let movesList = [];

        //down and right diagonal
        let i=location.col+1;
        let j=location.row+1;
        while(i<GameSettings.BOARD_SIZE && j<GameSettings.BOARD_SIZE){
            let downrightSquare = Square.at(j,i)
            let downrightPiece = board.getPiece(downrightSquare)

            //if( !uprightPiece )
                movesList.push( downrightSquare ) 

            i++
            j++
        }

        //up and right
        i=location.col+1;
        j=location.row-1;
        while(i<GameSettings.BOARD_SIZE && j>-1){
                let uprightSquare = Square.at(j,i)
                let uprightPiece = board.getPiece(uprightSquare)

                //if( !uprightPiece )
                    movesList.push( uprightSquare ) 

                i++
                j--
        }

        // down and left
        i=location.col-1;
        j=location.row+1;
        while(j<GameSettings.BOARD_SIZE && i>-1){
            let downleftSquare = Square.at(j,i)
            let downleftPiece = board.getPiece(downleftSquare)

            //if( !uprightPiece )
                movesList.push( downleftSquare ) 

            i--
            j++
        }

        // up and left
        i=location.col-1;
        j=location.row-1;
        while(j>-1 && i>-1){
            let upleftSquare = Square.at(j,i)
            let upleftPiece = board.getPiece(upleftSquare)

            //if( !uprightPiece )
                movesList.push( upleftSquare ) 

            i--
            j--
        }

        return movesList
        
    }
}
