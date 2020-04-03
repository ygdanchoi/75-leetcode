// https://leetcode.com/problems/friend-circles/

function findCircleNum(M) {
    const seen = {};
    
    function step(i) {
        if (seen[i]) {
            return false;
        }
        
        seen[i] = true;
        
        for (let j = 0; j < M.length; j++) { // children
            if (M[i][j] === 0) {
                continue;
            }
            
            step(j);
        }
        
        return true;
    }
    
    let groups = 0;
    
    for (let i = 0; i < M.length; i++) {
        if (step(i)) {
            groups += 1;
        }
    }
    
    return groups;
}

function findCircleNum(M) {
    const ds = new DisjointSets(getKeys(M.length));
    
    for (let i = 0; i < M.length; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (M[i][j] === 1 && !ds.areSameSet(i, j)) {
                ds.merge(i, j);    
            }
        }
    }
    
    return ds.numSets();
}

function getKeys(n) {
    const keys = new Array(n);
    
    for (let i = 0; i < n; i++) {
        keys[i] = i;
    }
    
    return keys;
}

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