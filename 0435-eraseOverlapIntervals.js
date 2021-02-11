// https://leetcode.com/problems/non-overlapping-intervals/

function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    
    let end = null;
    for (const interval of intervals) {
        if (end === null || end <= interval[0]) {
            end = interval[1];
        } else {
            count++
        }
    }
    
    return count;
}
