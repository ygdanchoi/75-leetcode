// https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums, target) {
    let a = 0;
    let z = nums.length - 1;
    
    while (a <= z) {
        const i = Math.floor((a + z) / 2);
        
        if (nums[i] === target) {
            return i;
        } else if (nums[a] <= nums[i]) { // left increasing
            if (nums[a] <= target && target <= nums[i]) {
                z = i - 1; // <-
            } else {
                a = i + 1; // ->
            }
        } else if (nums[i] <= nums[z]) { // right increasing
            if (nums[i] <= target && target <= nums[z]) {
                a = i + 1; // ->
            } else {
                z = i - 1; // <-
            }
        } else {
            throw 'unexpected case';
        }
    }
        
    return -1;
}