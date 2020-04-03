class DisjointSets {
    constructor(keys) {
        this.reps = new Map();
        for (const key of keys) {
            this.reps.set(key, key);
        }
    }
    
    areSameSet(a, b) {
        return this.reps.get(a) === this.reps.get(b);
    }
    
    merge(a, b) {
        const aRep = this.reps.get(a);
        const bRep = this.reps.get(b);
        
        for (const key of this.reps.keys()) {
            if (this.reps.get(key) === bRep) {
                this.reps.set(key, aRep);
            }
        }
    }
    
    numSets() {
        const reps = this.reps.values();
        return new Set(reps).size;
    }
}