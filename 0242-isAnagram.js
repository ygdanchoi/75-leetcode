function isAnagram(s, t) {
    const counts = {};
    
    for (const char of s) {
        if (counts[char] === undefined) {
            counts[char] = 0;    
        }
        counts[char]++;
    }
    
    for (const char of t) {
        counts[char]--;
        if (counts[char] === 0) {
            delete counts[char];
        }
    }
    
    return Object.keys(counts).length === 0;
}