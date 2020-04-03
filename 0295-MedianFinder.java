// https://leetcode.com/problems/find-median-from-data-stream/

class MedianFinder {
    
    private PriorityQueue<Integer> lo;
    private PriorityQueue<Integer> hi;

    public MedianFinder() {
        lo = new PriorityQueue<>(Comparator.reverseOrder());
        hi = new PriorityQueue<>();
    }
    
    public void addNum(int num) {
        if (lo.size() == 0 || num <= findMedian()) {
            lo.add(num);
        } else {
            hi.add(num);
        }
        
        rebalance();
    }
    
    private void rebalance() {
        if (lo.size() == hi.size() + 2) {
            hi.add(lo.poll());
        } else if (hi.size() == lo.size() + 2) {
            lo.add(hi.poll());
        }
    }
    
    public double findMedian() {
        if (lo.size() > hi.size()) {
            return (double) lo.peek();
        } else if (lo.size() < hi.size()) {
            return (double) hi.peek();
        } else {
            return (lo.peek() + hi.peek()) / 2.0;
        }
    }
}