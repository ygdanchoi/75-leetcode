// https://leetcode.com/problems/clone-graph/

function cloneGraph(head) {
    const graph = createAdjacencyMap(head);
    const copies = new Map();
    
    for (const node of graph.keys()) {
        const copy = new Node(node.val, []);
        copies.set(node, copy);
    }
    
    for (const node of graph.keys()) {
        const copy = copies.get(node);
        const neighbors = graph.get(node);
        
        for (const neighbor of neighbors) {
            const neighborCopy = copies.get(neighbor);
            copy.neighbors.push(neighborCopy);
        }
    }

    return copies.get(head);
}

function createAdjacencyMap(head) {
    const graph = new Map();
    const seen = new Set();
    
    function step(node) {
        if (seen.has(node)) {
            return;
        }
        seen.add(node);
        
        graph.set(node, node.neighbors);
        
        for (const neighbor of node.neighbors) {
            step(neighbor);
        }
    }
    
    step(head);
    return graph;
}