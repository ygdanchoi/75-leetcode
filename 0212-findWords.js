// https://leetcode.com/problems/word-search-ii/

function findWords(board, words) {
    function isPresent(word) {
        const seen = createSeen();
        
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if (step(word, 0, r, c, seen)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    function step(word, w, r, c, seen) {
        if (w === word.length) {
            return true;
        } else if (!isInBounds(r, c)) {
            return false;
        } else if (seen[r][c]) {
            return false;
        } else if (word[w] !== board[r][c]) {
            return false;
        }
        
        seen[r][c] = true;
        
        const found = step(word, w + 1, r - 1, c + 0, seen)
            || step(word, w + 1, r + 1, c + 0, seen)
            || step(word, w + 1, r + 0, c - 1, seen)
            || step(word, w + 1, r + 0, c + 1, seen)
        
        seen[r][c] = false;
        
        return found;
    }
        
    function isInBounds(r, c) {
        return 0 <= r && r < board.length
            && 0 <= c && c < board[0].length;
    }
    
    function createSeen() {
        return new Array(board.length).fill(false)
            .map(row => new Array(board[0].length).fill(false));
    }
    
    return words.filter(word => isPresent(word));
}