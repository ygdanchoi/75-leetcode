// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs) {
    const anagrams = {};
    const offset = 'a'.charCodeAt(0);
    
    for (const str of strs) {
        const key = createKey(str);
        
        if (anagrams[key] === undefined) {
            anagrams[key] = [];
        }
        anagrams[key].push(str);
    }
    
    function createKey(str) {
        const counts = new Array(26).fill(0);
        
        for (const char of str) {
            const i = char.charCodeAt(0) - offset;
            counts[i]++;
        }
        
        return counts.join(',');
    }
    
    return Object.values(anagrams);
}