// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

function buildTree(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    
    const root = new TreeNode(preorder[0]);

    const i = inorder.indexOf(root.val);
    
    const lPre = preorder.slice(1, 1 + i);
    const lIn = inorder.slice(0, i);
    const rPre = preorder.slice(1 + i);
    const rIn = inorder.slice(i + 1);
    
    root.left = buildTree(lPre, lIn);
    root.right = buildTree(rPre, rIn);
    
    return root;
}