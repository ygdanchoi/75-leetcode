// https://leetcode.com/problems/network-delay-time/

function networkDelayTime(times, N, K) {
    const graph = createAdjacencyMap(times, N);
    const dists = { [K]: 0 };
    const mpq = new MinPriorityQueue(Object.keys(graph));
    mpq.set(K, 0);
    
    while (!mpq.isEmpty()) {
        const entry = mpq.popEntry();
        const name = entry.key;
        const dist = entry.val;
        
        const children = graph[name];
        for (const child of children) {
            if (dist + child.dist < mpq.get(child.name)) {
                mpq.set(child.name, dist + child.dist);
                dists[child.name] = dist + child.dist;
            }
        }
    }
        
    if (Object.keys(dists).length < N) {
        return -1;
    }
    
    let maxDist = 0;
    
    for (const name in dists) {
        const dist = dists[name];
        maxDist = Math.max(maxDist, dist);
    }
    
    return maxDist;
}

function createAdjacencyMap(times, N) {
    const graph = {};
    
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }
    
    for (const time of times) {
        const [u, v, w] = time;
        graph[u].push({ name: v, dist: w });
    }
    
    return graph;
}

class MinPriorityQueue {
    constructor(keys) {
        this.map = {};
        for (const key of keys) {
            this.map[key] = Infinity;
        }
    }
    
    get(key) {
        return this.map[key];
    }
    
    set(key, val) {
        this.map[key] = val;
    }
    
    isEmpty() {
        return Object.keys(this.map).length === 0;
    }
    
    popEntry() {
        let minKey = null;
        let minVal = Infinity;
        
        for (const key in this.map) {
            const val = this.map[key];
            
            if (val <= minVal) {
                minKey = key;
                minVal = val;
            }
        }
        
        delete this.map[minKey];
        return { key: minKey, val: minVal };
    }
}