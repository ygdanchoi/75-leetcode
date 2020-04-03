// https://leetcode.com/problems/insert-interval/

function insert(intervals, newInterval) {
    const result = [];
    
    intervals.forEach(interval => {
        if (isOverlapping(interval, newInterval)) {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        } else {
            result.push(interval);
        }
    });
    
    result.push(newInterval);    
    result.sort((a, b) => a[0] - b[0]);
    return result;
};

function isOverlapping(a, b) {
    return a[0] <= b[0] && b[0] <= a[1]
        || a[0] <= b[1] && b[1] <= a[1]
        || b[0] <= a[0] && a[0] <= b[1]
        || b[0] <= a[1] && a[1] <= b[1];
}
