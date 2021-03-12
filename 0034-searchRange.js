function searchRange(nums, target) {
    const l = bisectLeft(nums, target);
    const r = bisectRight(nums, target);
    return [
        (nums[l] === target)
            ? l
            : -1,
        (nums[r - 1] === target)
            ? r - 1
            : -1
    ];
}

function bisectLeft(nums, target) {
    let l = 0;
    let r = nums.length;
    
    while (l < r) {
        const mid = (l + r) >> 1;
        if (nums[mid] < target) {
            l = mid + 1; // go right
        } else {
            r = mid; // go left
        }
    }
    
    return l
}

function bisectRight(nums, target) {
    let l = 0;
    let r = nums.length;
    
    while (l < r) {
        const mid = (l + r) >> 1;
        if (target < nums[mid]) {
            r = mid; // go left
        } else {
            l = mid + 1; // go right
        }
    }
    
    return l;
}
