// https://leetcode.com/problems/container-with-most-water/

function maxArea(heights) {
    let best = 0;
    let l = 0;
    let r = heights.length - 1;
    
    while (l < r) {
        const width = r - l;
        const height = Math.min(heights[l], heights[r]);
        best = Math.max(best, width * height);
        
        if (heights[l] < heights[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return best;
}