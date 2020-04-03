// https://leetcode.com/problems/course-schedule/

function canFinish(n, prerequisites) {    
    function createAdjacencyMap() {
        const graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (const prereq of prerequisites) {
            const from = prereq[1];
            const to = prereq[0];

            graph.get(from).push(to);
        }

        return graph
    }
    
    function hasCycle() {
        const unvisited = new Set();
        const visiting = new Set();
        const visited = new Set();
        
        for (let i = 0; i < n; i++) {
            unvisited.add(i);
        }

        function step(curr) {
            if (visited.has(curr)) {
                return false;
            } else if (visiting.has(curr)) {
                return true;
            } else if (unvisited.has(curr)) {
                unvisited.delete(curr);
                visiting.add(curr);
                
                const children = graph.get(curr);
                for (const child of children) {
                    if (step(child)) {
                        return true;
                    }
                }
                
                visiting.delete(curr);
                visited.add(curr);
            } else {
                throw 'unexpected state';
            }
        }

        for (let i = 0; i < n; i++) {
            if (step(i)) {
                return true;
            }
        }

        return false;
    }
    
    const graph = createAdjacencyMap();
    return !hasCycle();
}