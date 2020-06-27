// https://leetcode.com/problems/regular-expression-matching/

function isMatch(string, pattern) {
    const memo = new Array(string.length + 1).fill(null).map(row => {
        return new Array(pattern.length + 1).fill(null);
    });
    
    function step(s, p) {
        const isStarred = pattern[p + 1] === '*';
        const isMatch = pattern[p] === string[s] || pattern[p] === '.';
        
        if (p === pattern.length && s === string.length) {
            return true;
        } else if (p === pattern.length) {
            return false;
        } else if (s === string.length) {
            return isStarred && step(s, p + 2);
        } else if (memo[s][p] !== null) {
            return memo[s][p];
        }
        
        const result = isStarred
            ? isMatch && step(s + 1, p) || step(s, p + 2)
            : isMatch && step(s + 1, p + 1);
        
        memo[s][p] = result;
        return result;
    }
    
    return step(0, 0);
}