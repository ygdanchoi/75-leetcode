function minWindow(s, t) {
    let bestCand = '';

    const candCounts = {};
    const tCounts = {};
    let l = 0;
    let r = 0;
    
    for (const char of t.split('')) {
        incr(tCounts, char);
    }
    
    while (l < s.length && r < s.length) {
        incr(candCounts, s[r]);
        
        if (shouldExpandCand()) {
            r++;
        } else {
            const cand = s.substring(l, r + 1);
            if (bestCand === '' || cand.length < bestCand.length) {
                bestCand = cand;
            }
            
            decr(candCounts, s[l]);
            l++;
            
            while (!tCounts[s[l]] && l < r) {
                decr(candCounts, s[l]);
                l++;
            }
            
            decr(candCounts, s[r]);
        }
    }
    
    function incr(counts, char) {
        if (counts[char] === undefined) {
            counts[char] = 0;
        }
        counts[char]++;
    }
    
    function decr(counts, char) {
        counts[char]--;
        if (counts[char] === 0) {
            delete counts[char];
        }
    }
    
    function shouldExpandCand() {
        return Object.keys(tCounts).some(key => {
            return !candCounts[key] || candCounts[key] < tCounts[key];
        });
    }
    
    return bestCand;
}