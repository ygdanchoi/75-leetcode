// https://leetcode.com/problems/house-robber/

function rob(nums) {
    const memo = new Array(nums.length + 1).fill(null);
    
    function step(i) {
        if (i >= nums.length) {
            return 0;
        } else if (memo[i] !== null) {
            return memo[i];
        }
        
        const skip = step(i + 1);
        const take = nums[i] + step(i + 2);
        
        memo[i] = Math.max(take, skip);
        return Math.max(take, skip);
    }
    
    return step(0);
}