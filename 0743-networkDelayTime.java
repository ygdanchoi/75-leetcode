// https://leetcode.com/problems/network-delay-time/

class Solution {
    public int networkDelayTime(int[][] times, int N, int K) {
        // init adjacency list, priority queue w/ id lookup, and best total distances
        
        Map<Integer, List<Edge>> graph = new HashMap<>();
        PriorityQueue<Path> queue = new PriorityQueue<>();
        Map<Integer, Path> index = new HashMap<>();
        Map<Integer, Integer> distances = new HashMap<>();
        
        for (int id = 1; id <= N; id++) {
            Path path = new Path(id, K);
            
            graph.put(id, new ArrayList<>());
            queue.add(path);
            index.put(id, path);
        }
        
        for (int[] time : times) {
            int id = time[0];
            graph.get(id).add(new Edge(time));
        }
        
        // Disjkstra's algorithm
        
        while (!queue.isEmpty()) {            
            Path curr = queue.poll();
            index.remove(curr.id);
                        
            distances.put(curr.id, curr.dist);
                        
            for (Edge next : graph.get(curr.id)) {
                Path best = index.get(next.id);
                
                if (best != null && curr.dist + next.dist < best.dist) {
                    queue.remove(best);
                    best.dist = curr.dist + next.dist;
                    queue.add(best); // necessary to reprioritize queue
                }
            }
        }
        
        if (distances.values().stream().anyMatch(d -> d == Integer.MAX_VALUE)) {
            return -1;
        } else {
            return Collections.max(distances.values());
        }
    }
    
    private class Path implements Comparable<Path> {
        public int id;
        public int dist;
        
        public Path(int id, int K) {
            this.id = id;
            this.dist = (id == K)
                ? 0
                : Integer.MAX_VALUE;
        }
        
        @Override
        public int compareTo(Path that) {
            return Integer.compare(this.dist, that.dist);
        }
    }
    
    private class Edge {
        public int id;
        public int dist;
        
        public Edge(int[] time) {
            this.id = time[1];
            this.dist = time[2];
        }
    }
}