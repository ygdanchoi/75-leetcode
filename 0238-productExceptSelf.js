// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    let curr = 1;
    for (let i = 0; i < n - 1; i++) {
        curr *= nums[i];
        result[i + 1] *= curr;
    }
    
    curr = 1;
    for (let i = n - 1; i >= 1; i--) {
        curr *= nums[i];
        result[i - 1] *= curr;
    }
    
    return result;
}