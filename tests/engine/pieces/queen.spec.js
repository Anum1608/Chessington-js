import Queen from '../../../src/engine/pieces/queen';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';
import Pawn from '../../../src/engine/pieces/pawn';
import King from '../../../src/engine/pieces/king';

describe('Queen', () => {
    let board;
    beforeEach(() => board = new Board);

    it ('can move diagonally', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(2, 3), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Forwards diagonal
            Square.at(0, 1), Square.at(1, 2), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7),
            // Backwards diagonal
            Square.at(0, 5), Square.at(1, 4), Square.at(3, 2), Square.at(4, 1), Square.at(5, 0)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('can move laterally', () => {
        const queen = new Queen(Player.BLACK);
        board.setPiece(Square.at(4, 4), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Traversing the column
            Square.at(4, 0), Square.at(4, 1), Square.at(4, 2), Square.at(4, 3), Square.at (4, 5), Square.at(4, 6), Square.at(4, 7),
            // Traversing the rows
            Square.at(0, 4), Square.at(1, 4), Square.at(2, 4), Square.at(3, 4), Square.at (5, 4), Square.at(6, 4), Square.at(7, 4),
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot move through friendly pieces', () => {
        const queen = new Queen(Player.WHITE);
        const friendlyPiece1 = new Pawn(Player.WHITE);
        const friendlyPiece2 = new Pawn(Player.WHITE);
        board.setPiece(Square.at(4, 4), queen);
        board.setPiece(Square.at(4, 6), friendlyPiece1);
        board.setPiece(Square.at(6, 6), friendlyPiece2);

        const moves = queen.getAvailableMoves(board);

        moves.should.not.deep.include.members([Square.at(4, 7), Square.at(7, 7)]);
    });

    it('cannot move through opposing pieces', () => {
        const queen = new Queen(Player.WHITE);
        const opposingPiece1 = new Pawn(Player.BLACK);
        const opposingPiece2 = new Pawn(Player.BLACK);

        board.setPiece(Square.at(4, 4), queen);
        board.setPiece(Square.at(4, 6), opposingPiece1);
        board.setPiece(Square.at(6, 6), opposingPiece2);

        const moves = queen.getAvailableMoves(board);

        moves.should.not.deep.include.members([Square.at(4, 7), Square.at(7, 7)]);
    });

    it('can take opposing pieces', () => {
        const queen = new Queen(Player.WHITE);
        const opposingPiece1 = new Pawn(Player.BLACK);
        const opposingPiece2 = new Pawn(Player.BLACK);

        board.setPiece(Square.at(4, 4), queen);
        board.setPiece(Square.at(4, 6), opposingPiece1);
        board.setPiece(Square.at(6, 6), opposingPiece2);

        const moves = queen.getAvailableMoves(board);

        moves.should.deep.include.members([Square.at(6, 6),Square.at(4, 6)]);
    });

    it('can take the opposing king', () => {
        const queen = new Queen(Player.WHITE);
        const opposingKing1 = new King(Player.BLACK);
        const opposingKing2 = new King(Player.BLACK);

        board.setPiece(Square.at(4, 4), queen);
        board.setPiece(Square.at(4, 6), opposingKing1);
        board.setPiece(Square.at(2, 2), opposingKing2);


        const moves = queen.getAvailableMoves(board);

        moves.should.deep.include.members([Square.at(4, 6),Square.at(2, 2)]);
    });



    it('cannot take friendly pieces', () => {
        const queen = new Queen(Player.WHITE);
        const friendlyPiece1 = new Pawn(Player.WHITE);
        const friendlyPiece2 = new Pawn(Player.WHITE);

        board.setPiece(Square.at(4, 4), queen);
        board.setPiece(Square.at(4, 6), friendlyPiece1);
        board.setPiece(Square.at(6, 6), friendlyPiece2);

        const moves = queen.getAvailableMoves(board);

        moves.should.not.deep.include.members([Square.at(4, 6),Square.at(6, 6)]);
    });
});
