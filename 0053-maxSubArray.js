// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums) {
    let bestSum = -Infinity;
    let currSum = 0;
    
    nums.forEach(num => {
        currSum += num;
        bestSum = Math.max(bestSum, currSum);
        
        if (currSum < 0) {
            currSum = 0;
        }
    });
    
    return bestSum;
}