// https://leetcode.com/problems/minimum-window-substring/

function minWindow(s, t) {
    const targets = createTargets();
    const counts = createCounts();

    let i = advance(-1);
    let j = -1;
    let best = '';
            
    while (j < s.length) {
        if (containsAllCharacters()) {
            const curr = s.substring(i, j + 1);
            if (best === '' || curr.length < best.length) {
                best = curr;
            }
            
            counts[s[i]]--;    
            i = advance(i);
        } else {
            j = advance(j);
            counts[s[j]]++;
        }
    }
    
    function createTargets() {
        const targets = {};
        
        for (const char of t) {
            if (targets[char] === undefined) {
                targets[char] = 0;
            }
            targets[char]++;
        }
        
        return targets;
    }
    
    function createCounts() {
        const counts = {};
        
        for (const char of t) {
            counts[char] = 0;
        }
        
        return counts;
    }
    
    function containsAllCharacters() {
        return Object.keys(counts).every(char => {
            return counts[char] >= targets[char];
        });
    }
    
    function advance(idx) {
        idx++;
        while (idx < s.length && counts[s[idx]] === undefined) {
            idx++;
        }
        return idx;
    }
    
    return best;
}