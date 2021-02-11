// https://leetcode.com/problems/merge-intervals/

function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const results = [];
    
    for (const interval of intervals) {
        if (results.length === 0 || !isOverlapping(results[results.length - 1], interval)) {
            results.push(interval);
        } else {
            results[results.length - 1] = [
                Math.min(results[results.length - 1][0], interval[0]),
                Math.max(results[results.length - 1][1], interval[1])
            ];
        }
    }
    
    return results;
};

function isOverlapping(a, b) {
   return a[0] <= b[0] && b[0] <= a[1]
       || a[0] <= b[1] && b[1] <= a[1]
       || b[0] <= a[0] && a[0] <= b[1]
       || b[0] <= a[1] && a[1] <= b[1];
}
