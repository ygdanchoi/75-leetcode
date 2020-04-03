// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
    const seen = {};
    
    for (let j = 0; j < nums.length; j++) {
        const el = nums[j];
        const i = seen[target - el];
        
        if (i !== undefined) {
            return [i, j];
        } else {
            seen[el] = j;
        }
    }
    
    return null;
}