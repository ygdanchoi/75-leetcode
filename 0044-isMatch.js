// https://leetcode.com/problems/wildcard-matching/

function isMatch(string, pattern) {
    const memo = new Array(string.length + 1).fill(null).map(row => {
        return new Array(pattern.length + 1).fill(null);
    });
    
    function step(s, p) {
        let result;
        
        if (memo[s][p] !== null) {
            result = memo[s][p];
        } else if (s === string.length && p === pattern.length) {
            result = true;
        } else if (s === string.length) {
            result = pattern[p] === '*' && step(s, p + 1);
        } else if (p === pattern.length) {
            result = false;
        } else if (pattern[p] === '*') {
            result = step(s + 1, p) || step(s, p + 1);
        } else if (pattern[p] === string[s] || pattern[p] === '?') {
            result = step(s + 1, p + 1);
        } else {
            result = false;
        }
        
        memo[s][p] = result;
        return result;
    }
    
    return step(0, 0);
}