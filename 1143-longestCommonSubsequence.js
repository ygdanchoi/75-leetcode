// https://leetcode.com/problems/longest-common-subsequence/

function longestCommonSubsequence(text1, text2) {
    const memo = new Array(text1.length + 1).fill(-1)
        .map(row => new Array(text2.length + 1).fill(-1));
    function step(i1, i2) {
        if (i1 === text1.length || i2 === text2.length) {
            return 0;
        } else if (memo[i1][i2] !== -1) {
            return memo[i1][i2];
        }
        
        const take = (text1[i1] === text2[i2])
            ? 1 + step(i1 + 1, i2 + 1)
            : 0;
        const skip = Math.max(
            step(i1 + 1, i2),
            step(i1, i2 + 1),
        );
        
        memo[i1][i2] = Math.max(take, skip);
        return Math.max(take, skip);
    }
    
    return step(0, 0);
}