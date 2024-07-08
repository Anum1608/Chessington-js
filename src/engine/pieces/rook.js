import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let movesList = [];

        // add horizontal moves
        for (let i=0;i<GameSettings.BOARD_SIZE;i++){

            if(i!=location.col){
                movesList.push(Square.at(location.row,i));
            }      
        }

        // add vertical moves
        for (let i=0;i<GameSettings.BOARD_SIZE;i++){

            if(i!=location.row){
                movesList.push(Square.at(i,location.col));
            }      
        }
        
        return movesList;

        // give a list of available moves for rook
        //can move laterally

        //return new Array(0);
    }
}
