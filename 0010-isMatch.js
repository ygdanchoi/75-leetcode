// https://leetcode.com/problems/regular-expression-matching/

function isMatch(string, pattern) {
    const memo = new Array(string.length + 1).fill(null).map(row => {
        return new Array(pattern.length + 1).fill(null);
    });
    
    function step(s, p) {
        if (s === string.length && p === pattern.length) {
            return true;
        } else if (s > string.length || p === pattern.length) {
            return false;
        } else if (memo[s][p] !== null) {
            return memo[s][p];
        }
        
        const isMatch = pattern[p] === string[s] || pattern[p] === '.';
        
        const result = (pattern[p + 1] === '*')
            ? isMatch && step(s + 1, p) || step(s, p + 2)
            : isMatch && step(s + 1, p + 1);
        
        memo[s][p] = result;
        return result;

    }
    
    return step(0, 0);
}