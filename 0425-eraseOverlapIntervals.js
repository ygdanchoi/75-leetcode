// https://leetcode.com/problems/non-overlapping-intervals/

function eraseOverlapIntervals(intervals) {
    let best = Infinity;
    
    function step(depth) {
        let didOverlap = false;
        
        for (let i = 0; i < intervals.length - 1; i++) {
            for (let j = i + 1; j < intervals.length; j++) {
                if (!intervals[i] || !intervals[j]) {
                    continue;
                }
                
                if (isOverlapping(intervals[i], intervals[j])) {
                    didOverlap = true;
                    
                    const tempI = intervals[i];
                    intervals[i] = null;
                    step(depth + 1);
                    intervals[i] = tempI;
                    
                    const tempJ = intervals[j];
                    intervals[j] = null;
                    step(depth + 1);
                    intervals[j] = tempJ;

                }
            }
        }
        
        if (!didOverlap) {
            best = Math.min(best, depth);
        }
    }
    
    function isOverlapping(a, b) {
        return a[0] < b[0] && b[0] < a[1]
            || a[0] < b[1] && b[1] < a[1]
            || b[0] < a[0] && a[0] < b[1]
            || b[0] < a[1] && a[1] < b[1]
            || a[0] === b[0]
            || a[1] === b[1];
    }
    
    step(0);
    return best;
}