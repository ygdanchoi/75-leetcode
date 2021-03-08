// https://leetcode.com/problems/sliding-puzzle/

const SOLVED = JSON.stringify([[1, 2, 3], [4 ,5, 0]]);
const N = 'N';
const S = 'S';
const W = 'W';
const E = 'E';

function slidingPuzzle(board) {
    let minDepth = Infinity;
    const seen = new Set();
    const queue = [{
        board: JSON.stringify(board),
        depth: 0
    }];
    
    while (queue.length > 0) {
        const curr = queue.shift();
        
        if (seen.has(curr.board)) {
            continue;
        }
        seen.add(curr.board);
        
        if (curr.board === SOLVED) {
            minDepth = Math.min(minDepth, curr.depth);
            continue;
        }
        
        for (const nextBoard of getChildren(curr.board)) {
            queue.push({
                board: nextBoard,
                depth: curr.depth + 1
            });
        }
    }
    
    function getChildren(stringifedBoard) {
        const board = JSON.parse(stringifedBoard);
        
        for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 3; c++) {
                if (board[r][c] === 0) {
                    const dirs = getDirs(r, c);
                    return dirs.map(dir => getNewStringifiedBoard(r, c, dir, stringifedBoard));
                }
            }
        }
        
        throw 'unexpected state: ' + stringifiedBoard;
    }
    
    function getDirs(r, c) {
        switch (r) {
            case 0:
                switch (c) {
                    case 0:
                        return [S, E];
                    case 1:
                        return [S, W, E];
                    case 2:
                        return [S, W];
                }
            case 1:
                switch (c) {
                    case 0:
                        return [N, E];
                    case 1:
                        return [N, W, E];
                    case 2:
                        return [N, W];
                }
        }
    }
    
    function getNewStringifiedBoard(r, c, dir, stringifedBoard) {
        const board = JSON.parse(stringifedBoard);
        
        switch (dir) {
            case N:
                swap([r, c], [r - 1, c + 0], board);
                break;
            case S:
                swap([r, c], [r + 1, c + 0], board);
                break;
            case W:
                swap([r, c], [r + 0, c - 1], board);
                break;
            case E:
                swap([r, c], [r + 0, c + 1], board);
                break;
        }
        
        return JSON.stringify(board);
    }
    
    function swap(a, b, board) {
        const [rA, cA] = a;
        const [rB, cB] = b;
        
        const temp = board[rA][cA];
        board[rA][cA] = board[rB][cB];
        board[rB][cB] = temp;
    }
    
    return (minDepth !== Infinity)
        ? minDepth
        : -1;
}
