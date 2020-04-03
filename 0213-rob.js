// https://leetcode.com/problems/house-robber-ii/

function rob(nums) {
    const TAKE_FIRST = 1;
    const SKIP_FIRST = 0;
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    const memo = new Array(nums.length + 1).fill(-1)
        .map(row => new Array(2).fill(-1));
    
    function step(i, tookFirst) {
        if (tookFirst && i >= nums.length - 1) {
            return 0;
        } else if (!tookFirst && i >= nums.length) {
            return 0;
        } else if (memo[i][tookFirst] !== -1) {
            return memo[i][tookFirst];
        }
        
        const take = nums[i] + step(i + 2, tookFirst);
        const skip = step(i + 1, tookFirst);
        
        memo[i][tookFirst] = Math.max(take, skip);
        return Math.max(take, skip);
    }
    
    return Math.max(
        step(0, TAKE_FIRST),
        step(1, SKIP_FIRST)
    );
}