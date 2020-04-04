// https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums, k) {
    const result = [];
    const counts = new Map();
    
    for (const num of nums) {
        if (!counts.has(num)) {
            counts.set(num, 0);
        }
        counts.set(num, counts.get(num) + 1);
    }
    
    const entries = [...counts.entries()]
        .map(entry => ({ key: entry[0], val: entry[1] }));
    const heap = new MaxHeap(entries.length);
    
    for (const entry of entries) {
        heap.push(entry);
    }
    
    for (let i = 0; i < k; i++) {
        result.push(heap.pop().key);
    }
    
    return result;
}

class MaxHeap {
    constructor(capacity) {
        this.data = new Array(capacity).fill(null);
        this.size = 0;
    }
    
    push(entry) {
        // omit error handling
        
        this.data[this.size] = entry;
        this.size++;
        
        this.bubbleUp();
    }
    
    pop() {
        // omit error handling
        
        const max = this.data[0];
        this.swap(0, this.size - 1);
        this.data[this.size - 1] = null;
        this.size--;
        
        this.bubbleDown();
        return max;
    }
    
    bubbleUp() {
        let i = this.size - 1;
        
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
    
    shouldSwapParent(i) { // has smaller parent
        const j = this.parent(i);
        return j >= 0 && this.data[j].val < this.data[i].val; 
    }
    
    parent(i) {
        return (i - 1) >> 1;
    }
    
    shouldSwapChild(i) { // has larger child
        return this.children(i).some(j => this.data[i].val < this.data[j].val);
    }
    
    favoriteChild(i) { // larger child
        const [l, r] = this.children(i);
        if (r !== undefined && this.data[l].val < this.data[r].val) {
            return r;
        } else {
            return l;
        }
    }
    
    children(i) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        
        return [l, r].filter(i => 0 <= i && i < this.size);
    }
    
    swap(a, b) {
        const temp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = temp;
    }
}