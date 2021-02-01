// https://leetcode.com/problems/insert-interval/

function insert(intervals, newInterval) {
    const result = [];
    let i = 0;
    
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i++]);
    }
    
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [
            Math.min(intervals[i][0], newInterval[0]),
            Math.max(intervals[i][1], newInterval[1])
        ];
        
        i++;
    }
    
    result.push(newInterval);
    
    while (i < intervals.length) {
        result.push(intervals[i++]);
    }
    
    return result;
}