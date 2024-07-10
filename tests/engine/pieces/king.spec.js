import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Square from '../../../src/engine/square';
import Player from '../../../src/engine/player';

describe('King', () => {
    let board;
    beforeEach(() => board = new Board);

    it ('can move only one square in any direction', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(2, 3), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [Square.at(1,2) , Square.at(1,3), Square.at(1,4), Square.at(2,4), Square.at(3,4) ,
                            Square.at(3,3), Square.at(3,2), Square.at(2,2) ];

        moves.should.deep.include.members(expectedMoves);
    });

    it ('cannot move through any piece', () => {
    
    });

    it ('cannot take any piece', () => {
    
    });
});
