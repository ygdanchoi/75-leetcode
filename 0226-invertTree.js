// https://leetcode.com/problems/invert-binary-tree/

function invertTree(root) {
    if (root === null) {
        return null;
    }
    
    const l = root.left;
    const r = root.right;
    
    root.left = invertTree(r);
    root.right = invertTree(l);
    
    return root;
}