// https://leetcode.com/problems/maximum-product-subarray/

function maxProduct(nums) {
    const n = nums.length;
    
    let fwd = nums[0];
    let bwd = nums[n - 1];
    let best = Math.max(fwd, bwd);
    
    for (let i = 1; i < n; i++) {
        const j = n - 1 - i;
        
        fwd = fwd // prev
            ? nums[i] * fwd
            : nums[i];
        
        bwd = bwd // prev
            ? nums[j] * bwd
            : nums[j];
        
        best = Math.max(best, fwd);
        best = Math.max(best, bwd);
    }
        
    return best;
}