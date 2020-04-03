// https://leetcode.com/problems/merge-intervals/

function merge(intervals) {
    let i = 0;
    
    while (i < intervals.length - 1) {
        let j = i + 1;
        
        while (j < intervals.length) {
            const a = intervals[i];
            const b = intervals[j];

            if (isOverlapping(a, b)) {
                mergeAt(i, j);
                j = i + 1;
            } else {
                j++;
            }
        }
        
        i++;
    }
    
    function isOverlapping(a, b) {
        return a[0] <= b[0] && b[0] <= a[1]
            || a[0] <= b[1] && b[1] <= a[1]
            || b[0] <= a[0] && a[0] <= b[1]
            || b[0] <= a[1] && a[1] <= b[1];
    }
    
    function mergeAt(i, j) {
        const a = intervals[i];
        const b = intervals[j]

        const min = Math.min(a[0], b[0]);
        const max = Math.max(a[1], b[1]);

        intervals[i] = [min, max];
        intervals.splice(j, 1);
    }
    
    return intervals;
}