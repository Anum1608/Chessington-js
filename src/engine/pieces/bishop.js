import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

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

            // if( !downrightPiece ) {
            //     movesList.push( downrightSquare )
            //     // break;
            // } else if( downrightPiece instanceof King || downrightPiece.player === this.player ){
            //     break;   //cannot take piece, cannot move through
            // }else {//               if (downrightPiece && (downrightPiece.player !== this.player)){
            //     movesList.push( downrightSquare )  //take the piece
            //     break;                              // cannot move through
            // }

            // If we have a piece, and it is a King or a friendly piece, no more processing
            if (downrightPiece && (downrightPiece instanceof King || downrightPiece.player === this.player))
                break;

            // We move the piece...
            movesList.push(downrightSquare);

            // If have taken the piece, no more processing...
            if (downrightPiece)
                break;

            i++
            j++
        }

        //up and right
        i=location.col+1;
        j=location.row-1;
        while (i < GameSettings.BOARD_SIZE && j > -1) {
            let uprightSquare = Square.at(j, i)
            let uprightPiece = board.getPiece(uprightSquare)

            // if (!uprightPiece) {
            //     movesList.push(uprightSquare)
            //     // break;
            // } else if (uprightPiece instanceof King || uprightPiece.player === this.player) {
            //     break;   //cannot take piece, cannot move through
            // } else {
            //     movesList.push(uprightSquare)
            //     break;
            // }

            if (uprightPiece && (uprightPiece instanceof King || uprightPiece.player === this.player))
                break;

            movesList.push(uprightSquare);

            if (uprightPiece)
                break;

            i++
            j--
        }

        // down and left
        i=location.col-1;
        j=location.row+1;
        while(j<GameSettings.BOARD_SIZE && i>-1){
            let downleftSquare = Square.at(j,i)
            let downleftPiece = board.getPiece(downleftSquare)

            // if( !downleftPiece ){
            //     movesList.push( downleftSquare )
            //     // break;
            // } else if( downleftPiece instanceof King || downleftPiece.player === this.player ){
            //     break;   //cannot take piece, cannot move through
            // } else {//if(downleftPiece && (downleftPiece.player !== this.player)){
            //     movesList.push( downleftSquare )
            //     break;
            // }

            if (downleftPiece && (downleftPiece instanceof King || downleftPiece.player === this.player))
                break;

            movesList.push(downleftSquare);

            if (downleftPiece)
                break;

            i--
            j++
        }

        // up and left
        i=location.col-1;
        j=location.row-1;
        while(j>-1 && i>-1){
            let upleftSquare = Square.at(j,i)
            let upleftPiece = board.getPiece(upleftSquare)

            // if( !upleftPiece ){ // there is no piece on the square
            //     movesList.push( upleftSquare ) //continue the search
            //     // break;
            // } else if( upleftPiece instanceof King || upleftPiece.player === this.player ){
            //     break;   //cannot take piece, cannot move through
            // } else {//if(upleftPiece && (upleftPiece.player !== this.player)){ //there is a piece, but its an opposing piece
            //     movesList.push( upleftSquare ) //stop the search and take over the piece
            //     break; 
            // }

            if (upleftPiece && (upleftPiece instanceof King || upleftPiece.player === this.player))
                break;

            movesList.push(upleftSquare);

            if (upleftPiece)
                break;

            i--
            j--
        }

        return movesList
        
    }
}
