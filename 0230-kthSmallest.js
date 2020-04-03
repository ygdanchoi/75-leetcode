// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

function kthSmallest(root, k) {   
    function step(node) {
        if (!node) {
            return null;
        }
        
        const l = step(node.left);
        if (l !== null) {
            return l;
        }
        
        k--;
        if (k === 0) {
            return node.val;
        }
        
        const r = step(node.right);
        if (r !== null) {
            return r;
        }
        
        return null;
    }
    
    return step(root);
}