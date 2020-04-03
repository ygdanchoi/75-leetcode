// https://leetcode.com/problems/contains-duplicate/submissions/

function containsDuplicate(nums) {
    const seen = {};
    
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        
        if (seen[el]) {
            return true;
        } else {
            seen[el] = true;
        }
    }
    
    return false;
}