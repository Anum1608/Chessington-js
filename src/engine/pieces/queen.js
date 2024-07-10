import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let movesList = [];
        // let movesList = [
        //     Square.at(0, 1), Square.at(1, 2), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7),
        //     Square.at(0, 5), Square.at(1, 4), Square.at(3, 2), Square.at(4, 1), Square.at(5, 0)
        // ];

        //right search
        for (let i = location.col + 1; i < GameSettings.BOARD_SIZE; i++) {
            let rightSquare = Square.at(location.row, i)
            let rightPiece = board.getPiece(rightSquare)
            
            // If the piece a friendly piece, stop
            if (rightPiece && rightPiece.player === this.player)
                break;

            // Make the move
            movesList.push(rightSquare);

            // If we have taken a piece, stop
            if (rightPiece)
                break;
        }


        // left search
        for (let i = location.col - 1; i > -1; i--) {
            let leftSquare = Square.at(location.row, i)
            let leftPiece = board.getPiece(leftSquare)

            // If the piece is friendly, stop
            if (leftPiece && leftPiece.player === this.player)
                break;

            // Make the move
            movesList.push(leftSquare);

            // If we have taken a piece, stop
            if (leftPiece)
                break;
            }

        //down search
        for (let i = location.row + 1; i < GameSettings.BOARD_SIZE; i++) {
            let downSquare = Square.at(i, location.col)
            let downPiece = board.getPiece(downSquare)
            
            // If the piece is friendly, stop
            if (downPiece && downPiece.player === this.player)
                break;

            // Make the move
            movesList.push(downSquare);

            // If we have taken a piece, stop
            if (downPiece)
                break;

        }

        // up search
        for (let i = location.row - 1; i > -1; i--) {
            let upSquare = Square.at(i, location.col)
            let upPiece = board.getPiece(upSquare)

            // If the piece is friendly, stop
            if (upPiece && upPiece.player === this.player)
                break;

            // Make the move
            movesList.push(upSquare);

            // If we have taken a piece, stop
            if (upPiece)
                break;

        }

        //down and right diagonal
        let i = location.col + 1;
        let j = location.row + 1;
        while (i < GameSettings.BOARD_SIZE && j < GameSettings.BOARD_SIZE) {
            let downrightSquare = Square.at(j, i)
            let downrightPiece = board.getPiece(downrightSquare)

            // If we have a friendly piece, no more processing
            if (downrightPiece && (downrightPiece.player === this.player))
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
        i = location.col + 1;
        j = location.row - 1;
        while (i < GameSettings.BOARD_SIZE && j > -1) {
            let uprightSquare = Square.at(j, i)
            let uprightPiece = board.getPiece(uprightSquare)

            if (uprightPiece && (uprightPiece.player === this.player))
                break;

            movesList.push(uprightSquare);

            if (uprightPiece)
                break;

            i++
            j--
        }

        // down and left
        i = location.col - 1;
        j = location.row + 1;
        while (j < GameSettings.BOARD_SIZE && i > -1) {
            let downleftSquare = Square.at(j, i)
            let downleftPiece = board.getPiece(downleftSquare)

            if (downleftPiece && (downleftPiece.player === this.player))
                break;

            movesList.push(downleftSquare);

            if (downleftPiece)
                break;

            i--
            j++
        }

        // up and left
        i = location.col - 1;
        j = location.row - 1;
        while (j > -1 && i > -1) {
            let upleftSquare = Square.at(j, i)
            let upleftPiece = board.getPiece(upleftSquare)

            if (upleftPiece && (upleftPiece.player === this.player))
                break;

            movesList.push(upleftSquare);

            if (upleftPiece)
                break;

            i--
            j--
        }

        return movesList;
    }
}
