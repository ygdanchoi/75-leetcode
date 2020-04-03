// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n) {
    const memo = new Array(n).fill(-1);
    
    function step(i) {
        if (i === n) {
            return 1;
        } else if (i > n) {
            return 0;
        } else if (memo[i] !== -1) {
            return memo[i];
        }
        
        const next = step(i + 1) + step(i + 2);
        memo[i] = next;
        return next;
    }
    
    return step(0);
}