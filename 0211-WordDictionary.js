// https://leetcode.com/problems/add-and-search-word-data-structure-design/

class WordDictionary {
    constructor() {
        this.trie = {};
    }   
    
    addWord(word) {
        let curr = this.trie;
        
        for (const char of word.concat('*')) {
            if (curr[char] === undefined) {
                curr[char] = {};
            }
            curr = curr[char];
        }
    }
    
    search(word) {
        word = word.concat('*');
        
        const nodeQueue = [this.trie];
        const depthQueue = [0];
        
        while (nodeQueue.length > 0) {
            const currNode = nodeQueue.shift();
            const depth = depthQueue.shift();
            
            if (depth === word.length) {
                return true;
            }
            
            for (const char in currNode) {
                if (word[depth] === char || word[depth] === '.') {
                    const nextNode = currNode[char];
                    nodeQueue.push(nextNode);
                    depthQueue.push(depth + 1);
                }
            }
        }
        
        return false;
    }
}