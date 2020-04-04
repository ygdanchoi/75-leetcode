// https://leetcode.com/problems/find-median-from-data-stream/

class MedianFinder {
    constructor() {
        this.lo = new Heap((a, b) => b - a); // max heap
        this.hi = new Heap((a, b) => a - b); // min heap
    }
    
    addNum(num) {
        if (this.lo.size() == 0 || num <= this.findMedian()) {
            this.lo.push(num);
        } else {
            this.hi.push(num);
        }
        
        this.rebalance();
    }
    
    rebalance() {
        if (this.lo.size() == this.hi.size() + 2) {
            this.hi.push(this.lo.pop());
        } else if (this.hi.size() == this.lo.size() + 2) {
            this.lo.push(this.hi.pop());
        }
    }
    
    findMedian() {
        if (this.lo.size() > this.hi.size()) {
            return this.lo.peek();
        } else if (this.lo.size() < this.hi.size()) {
            return this.hi.peek();
        } else {
            return (this.lo.peek() + this.hi.peek()) / 2;
        }
    }
}

class Heap {
    constructor(comparator) {
        this.comparator = comparator;
        this.data = [];
    }
    
    push(num) {
        // omit error handling
        
        this.data.push(num);
        this.bubbleUp();
    }
    
    pop() {
        // omit error handling
        
        const num = this.data[0];
        this.swap(0, this.size() - 1);
        this.data.pop();
        this.bubbleDown();
        return num;
    }
    
    peek() {
        return this.data[0];
    }
    
    bubbleUp() {
        let i = this.size() - 1;
        
        while (this.shouldSwapParent(i)) {
            const j = this.parent(i);
            this.swap(i, j);
            i = j;
        }
    }
    
    bubbleDown() {
        let i = 0;
        
        while (this.shouldSwapChild(i)) {
            const j = this.favoriteChild(i);
            this.swap(i, j);
            i = j;
        }
    }
    
    shouldSwapParent(i) { // has worse parent
        const j = this.parent(i);
        return j >= 0 && this.comparator(this.data[i], this.data[j]) < 0; 
    }
    
    parent(i) {
        return (i - 1) >> 1;
    }
    
    shouldSwapChild(i) { // has better child
        return this.children(i).some(j => this.comparator(this.data[i], this.data[j]) > 0);
    }
    
    favoriteChild(i) { // better child
        const [l, r] = this.children(i);
        if (r !== undefined && this.comparator(this.data[l], this.data[r]) > 0) {
            return r;
        } else {
            return l;
        }
    }
    
    children(i) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        
        return [l, r].filter(i => 0 <= i && i < this.size());
    }
    
    swap(a, b) {
        const temp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = temp;
    }
    
    size() {
        return this.data.length;
    }
}
