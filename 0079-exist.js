// https://leetcode.com/problems/word-search/

function exist(board, word) {
    const seen = new Array(board.length).fill(false).map(row => {
        return new Array(board[0].length).fill(false);
    });
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (step(r, c, 0)) {
                return true;
            }
        }
    }
    
    function step(r, c, w) {
        if (w === word.length) {
            return true;
        } else if (!isInBounds(r, c)) {
            return false;
        } else if (seen[r][c]) {
            return false;
        } else if (board[r][c] !== word[w]) {
            return false;
        }
        
        seen[r][c] = true;
        
        const result = false
            || step(r - 1, c + 0, w + 1)
            || step(r + 1, c + 0, w + 1)
            || step(r + 0, c - 1, w + 1)
            || step(r + 0, c + 1, w + 1);
        
        seen[r][c] = false;
        
        return result;
    }
    
    function isInBounds(r, c) {
        return 0 <= r && r < board.length
            && 0 <= c && c < board[0].length;
    }
    
    return false;
}