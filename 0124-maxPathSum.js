function maxPathSum(root) {
    let best = -Infinity;
    
    function step(node) {
        if (!node) {
            return -Infinity;
        }
        
        let curr = -Infinity;
        
        const l = step(node.left);
        const r = step(node.right);
        
        curr = Math.max(curr, node.val);
        curr = Math.max(curr, node.val + l);
        curr = Math.max(curr, node.val + r);
        
        best = Math.max(best, curr);
        best = Math.max(best, l + node.val + r); // cannot propagate third branch
        
        return curr;
    }
    
    step(root);
    
    return best;
}