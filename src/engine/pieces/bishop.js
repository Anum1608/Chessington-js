import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let movesList = [
            // Square.at(0, 1), Square.at(1, 2), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7),
            // Square.at(0, 5), Square.at(1, 4), Square.at(3, 2), Square.at(4, 1), Square.at(5, 0)
        ];

        //down and right diagonal
        for (let i=location.col+1;i<GameSettings.BOARD_SIZE;i++){
            for (let j=location.row+1;j<GameSettings.BOARD_SIZE;j++){

                let downrightSquare = Square.at(j,i)
                let downrightPiece = board.getPiece(downrightSquare)

                //if( !downrightPiece )
                    movesList.push( downrightSquare ) 

            }
        }

        //up and right
        for (let i=location.col+1;i<GameSettings.BOARD_SIZE;i++){
            for (let j=location.row-1;j>-1;j--){

                let uprightSquare = Square.at(j,i)
                let uprightPiece = board.getPiece(uprightSquare)

                //if( !uprightPiece )
                    movesList.push( uprightSquare ) 

            }

        }

        // down and left
        for (let i=location.col-1; i>-1; i--){
            for (let j=location.row+1;j<GameSettings.BOARD_SIZE;j++){

                let downleftSquare = Square.at(j,i)
                let downleftPiece = board.getPiece(downleftSquare)

                //if( !downleftPiece )
                    movesList.push( downleftSquare ) 

            }

        }

        // up and left
        for (let i=location.col-1; i>-1; i--){
            for (let j=location.row-1;j>-1;j--){

                let upleftSquare = Square.at(j,i)
                let upleftPiece = board.getPiece(upleftSquare)

                //if( !upleftPiece )
                    movesList.push( upleftSquare ) 

            }

        }

        return movesList
        
    }
}
