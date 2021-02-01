// https://leetcode.com/problems/insert-interval/

function insert(intervals, newInterval) {
    const result = [];
    
    for (const interval of intervals) {
        if (isOverlapping(interval, newInterval)) {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        } else {
            result.push(interval);
        }
    }
    
    result.push(newInterval);    
    result.sort((a, b) => a[0] - b[0]);
    return result;
}

function insert(intervals, newInterval) {
    let start = null;
    let deleteCount = 0;
    
    for (let i = 0; i < intervals.length; i++) {
        if (isOverlapping(intervals[i], newInterval)) {
            newInterval = [
                Math.min(intervals[i][0], newInterval[0]),
                Math.max(intervals[i][1], newInterval[1])
            ];
            if (start === null) {
                start = i;
            }
            deleteCount++;
        }
    }
    
    if (start === null) {
        start = 0;
        
        while (start < intervals.length && intervals[start][0] < newInterval[0]) {
            start++;
        }
    }
        
    intervals.splice(start, deleteCount, newInterval);
    return intervals;
}

function isOverlapping(a, b) {
    return a[0] <= b[0] && b[0] <= a[1]
        || a[0] <= b[1] && b[1] <= a[1]
        || b[0] <= a[0] && a[0] <= b[1]
        || b[0] <= a[1] && a[1] <= b[1];
}


function isOverlapping(a, b) {
    return a[0] <= b[0] && b[0] <= a[1]
        || a[0] <= b[1] && b[1] <= a[1]
        || b[0] <= a[0] && a[0] <= b[1]
        || b[0] <= a[1] && a[1] <= b[1];
}
