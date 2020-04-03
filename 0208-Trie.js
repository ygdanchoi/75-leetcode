// https://leetcode.com/problems/implement-trie-prefix-tree/

class Trie {
    constructor() {
        this.trie = {};
    }
    
    insert(word) {
        let curr = this.trie;

        for (const char of word.concat('*')) {
            if (curr[char] === undefined) {
                curr[char] = {};
            }

            curr = curr[char];
        }
    }
    
    search(word) {
        let curr = this.trie;

        for (const char of word) {
            if (curr[char] !== undefined) {
                curr = curr[char];
            } else {
                return false;
            }
        }

        return curr['*'] !== undefined;
    }
    
    startsWith(prefix) {
        let curr = this.trie;

        for (const char of prefix) {
            if (curr[char] !== undefined) {
                curr = curr[char];
            } else {
                return false;
            }
        }

        return curr !== undefined;
    }
}