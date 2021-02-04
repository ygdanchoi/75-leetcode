// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums) {
    nums = new Set(nums);
    const seen = new Set();
    let maxLength = 0;
    
    for (const num of [...nums]) {
        maxLength = Math.max(maxLength, step(num));
    }
    
    function step(curr) {
        if (!nums.has(curr)) {
            return 0;
        } else if (seen.has(curr)) {
            return 0;
        } 
        seen.add(curr);
        return step(curr - 1) + 1 + step(curr + 1);
    }
    
    return maxLength;
}
