// https://leetcode.com/problems/unique-paths/

function uniquePaths(m, n) {
    const memo = new Array(m).fill(-1)
        .map(row => new Array(n).fill(-1));
    
    function step(r, c) {
        if (r === m - 1 && c === n - 1) {
            return 1;
        } else if (r === m || c === n) {
            return 0;
        } else if (memo[r][c] !== -1) {
            return memo[r][c];
        }
        
        const s = step(r + 1, c + 0);
        const e = step(r + 0, c + 1);
        
        memo[r][c] = s + e;
        return s + e;
    }
    
    return step(0, 0);
}