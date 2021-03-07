// https://leetcode.com/problems/min-cost-to-connect-all-points/

function minCostConnectPoints(points) {
    let cost = 0;
    const unvisited = new DisjointSets();
    const edges = [];
    
    for (const point of points) {
        unvisited.add(point.join(','));
    }
    
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const pointA = points[i];
            const pointB = points[j];

            edges.push({
                from: pointA.join(','),
                to: pointB.join(','),
                distance: Math.abs(pointB[0] - pointA[0]) + Math.abs(pointB[1] - pointA[1])
            });
        }
    }
    
    edges.sort((a, b) => a.distance - b.distance);

    for (const edge of edges) {        
        if (!unvisited.areSameSet(edge.from, edge.to)) {
            cost += edge.distance;
            unvisited.merge(edge.from, edge.to);
        }
    }
    
    return cost;
}

class DisjointSets {
    constructor() {
        this.reps = {};
    }
    
    add(key) {
        this.reps[key] = key;
    }
    
    areSameSet(a, b) {
        return this.reps[a] === this.reps[b];
    }
    
    merge(a, b) {
        const repA = this.reps[a];
        const repB = this.reps[b];
        
        for (const key of Object.keys(this.reps)) {
            if (this.reps[key] === repA) {
                this.reps[key] = repB;
            }
        }
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
 function minCostConnectPoints(points) {
    if (points.length <= 1) {
        return 0;
    }
    
    const graph = createGraph(points);
    const distances = createDistances(points);
    const parents = new Map();
    const queue = new Set(distances.keys());
    
    while (queue.size > 0) {
        const key = pop(queue, distances);
        const children = graph.get(key);
        
        for (const next of children) {
            if (queue.has(next.key) && next.distance < distances.get(next.key)) {
                distances.set(next.key, next.distance);
                parents.set(next.key, key);
            }
        }        
    }
    
    return [...parents.entries()]
        .map(entry => [
            entry[0].split(','),
            entry[1].split(',')
        ])
        .map(pair => calcDistance(
            parseInt(pair[0][0]),
            parseInt(pair[0][1]),
            parseInt(pair[1][0]),
            parseInt(pair[1][1])
        ))
        .reduce((acc, num) => acc + num, 0)
}

function createGraph(points) {
    const graph = new Map();
    
    for (let a = 0; a < points.length - 1; a++) {
        for (let b = a + 1; b < points.length; b++) {
            const pointA = points[a];
            const pointB = points[b];
            const keyA = getKey(pointA);
            const keyB = getKey(pointB);
            const distance = calcDistance(...pointA, ...pointB);
            
            if (!graph.has(keyA)) {
                graph.set(keyA, []);
            }
            graph.get(keyA).push({
                key: keyB,
                distance
            });
            
            if (!graph.has(keyB)) {
                graph.set(keyB, []);
            }
            graph.get(keyB).push({
                key: keyA,
                distance
            });
        }
    }
    
    return graph;
}

function calcDistance(xA, yA, xB, yB) {
    return Math.abs(xA - xB) + Math.abs(yA - yB);
}

function createDistances(points) {
    const distances = new Map();
    
    distances.set(getKey(points[0]), 0);
    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        const key = getKey(point);
        distances.set(key, Infinity);
    }
    
    return distances;
}

function pop(queue, distances) {
    let minKey = null;
    
    for (const key of [...queue]) {
        if (minKey === null || distances.get(key) < distances.get(minKey)) {
            minKey = key;
        }
    }
    
    queue.delete(minKey);
    return minKey;
}

function getKey(point) {
    return point.join(',');
}
