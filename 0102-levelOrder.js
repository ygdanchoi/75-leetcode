// https://leetcode.com/problems/binary-tree-level-order-traversal/

function levelOrder(root) {
    if (!root) {
        return [];
    }
    
    const result = [];
    const nodeQueue = [root];
    const depthQueue = [0];
    
    while (nodeQueue.length > 0) {
        const curr = nodeQueue.shift();
        const depth = depthQueue.shift();
        
        if (result.length < depth + 1) {
            result.push([]);
        }
        
        result[depth].push(curr.val);
        
        if (curr.left) {
            nodeQueue.push(curr.left);
            depthQueue.push(depth + 1);
        }
        
        if (curr.right) {
            nodeQueue.push(curr.right);
            depthQueue.push(depth + 1);
        }        
    }
    
    return result;
}