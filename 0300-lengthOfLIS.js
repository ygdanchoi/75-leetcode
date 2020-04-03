// https://leetcode.com/problems/longest-increasing-subsequence/

function lengthOfLIS(nums) {
    const memo = new Array(nums.length).fill(null)
        .map(row => new Array(nums.length + 1).fill(null));
    
    function step(i, prevI) {
        if (i === nums.length) {
            return 0;
        } else if (memo[i][prevI + 1] !== null) {
            return memo[i][prevI + 1];
        }
        
        const take = (prevI === -1 || nums[prevI] < nums[i])
            ? 1 + step(i + 1, i)
            : 0;
        const skip = step(i + 1, prevI);
        
        memo[i][prevI + 1] = Math.max(take, skip);
        return memo[i][prevI + 1];
    }
    
    return step(0, -1);
}