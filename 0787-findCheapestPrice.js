// https://leetcode.com/problems/cheapest-flights-within-k-stops/

function findCheapestPrice(n, edges, src, dst, K) {
    const graph = createAdjacencyGraph(n, edges);
    let bestPrice = Infinity;
    
    const visiting = {};
    
    function step(city, depth, price) {
        visiting[city] = true;
        
        if (city === dst) {
            bestPrice = Math.min(bestPrice, price);
        }
        
        for (const child of graph[city]) {
            if (depth + 1 > K + 1) {
                continue;
            } else if (price + child.price >= bestPrice) {
                continue;
            } else if (visiting[child.city]) {
                continue;
            }
            
            step(
                child.city,
                depth + 1,
                price + child.price
            );
        }
        
        visiting[city] = false;
    }

    step(src, 0, 0);
    
    return (bestPrice !== Infinity)
        ? bestPrice
        : -1;
}

function createAdjacencyGraph(n, edges) {
    const graph = {};
    
    for (let city = 0; city < n; city++) {
        graph[city] = [];
    }
    
    for (const edge of edges) {
        const [u, v, w] = edge;
        graph[u].push({ city: v, price: w });
    }
    
    return graph;
}