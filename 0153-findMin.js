// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    if (nums.length === 1 || nums[l] < nums[r]) {
        return nums[l];
    }
    
    while (true) {
        const i = Math.floor((l + r) / 2);
        
        if (nums[i - 1] > nums[i]) {
            return nums[i];
        } else if (nums[i] > nums[i + 1]) {
            return nums[i + 1];
        } else if (nums[i] > nums[r]) { // ->
            l = i;
        } else if (nums[l] > nums[i]) { // <-
            r = i;
        } else {
            throw 'unexpected case';
        }   
    }
}