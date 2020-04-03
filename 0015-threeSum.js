// https://leetcode.com/problems/3sum/

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let a = 0; a < nums.length - 2; a++) {
        if (nums[a - 1] === nums[a]) {
            continue;
        }
        
        let b = a + 1;
        let c = nums.length - 1;
        
        while (b < c) {
            if (nums[a] + nums[b] + nums[c] === 0) {
                result.push([nums[a], nums[b], nums[c]]);
                b++;
                while (nums[b - 1] === nums[b]) {
                    b++;
                }
                c--;
            } else if (nums[a] + nums[b] + nums[c] < 0) {
                b++;
            } else {
                c--;
            }
        }
    }
    
    return result;
}