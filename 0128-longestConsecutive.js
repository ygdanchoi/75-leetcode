// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums) {
    const graph = {};
    const seen = {};
    
    let best = 0;
    
    for (const num of nums) {
        if (graph[num] === undefined) {
            graph[num] = [];
        }
        graph[num].push(num + 1);
        
        if (graph[num + 1] === undefined) {
            graph[num + 1] = [];
        }
        graph[num + 1].push(num);
    }
    
    for (const num of nums) {
        best = Math.max(best, step(num) - 1);
    }
    
    function step(curr) {
        if (seen[curr]) {
            return 0;
        }
        
        seen[curr] = true;
        let result = 1;
        
        for (const child of graph[curr]) {
            result += step(child);
        }
        
        return result;
    }
    
    return best;
}