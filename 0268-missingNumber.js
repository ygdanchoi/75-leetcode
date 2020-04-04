// https://leetcode.com/problems/missing-number/

function missingNumber(nums) {
    let result = 0;
    
    for (let i = 0; i <= nums.length; i++) {
        result = result ^ i;
    }
    
    for (const num of nums) {
        result = result ^ num;
    }
    
    return result;
}