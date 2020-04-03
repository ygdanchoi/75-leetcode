// https://leetcode.com/problems/jump-game/

function canJump(nums) {
    const memo = new Array(nums.length + 1).fill(-1);
    
    function step(i) {
        if (i === nums.length - 1) {
            return true;
        } else if (i >= nums.length) {
            return false;
        } else if (memo[i] !== -1) {
            return memo[i];
        }
                
        for (let r = 1; r <= nums[i]; r++) {
            const next = step(i + r);
            
            if (next) {
                memo[i] = true;
                return true;
            }
        }
        
        memo[i] = false;
        return false;
    }
    
    return step(0);
}