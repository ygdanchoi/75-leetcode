// https://leetcode.com/problems/delete-node-in-a-bst/

function deleteNode(root, key) {
    if (!root) {
        return null;
    } else if (key === root.val) {
        return displace(root);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    } else {
        root.right = deleteNode(root.right, key);
        return root;
    }
}

function displace(root) {
    if (root.left && root.right) {
        const successor = getSuccessor(root);
        return new TreeNode(
            successor.val,
            root.left,
            deleteNode(root.right, successor.val)
        );
    } else if (root.left) {
        return root.left;
    } else if (root.right) {
        return root.right;
    } else {
        return null;
    }
}

function getSuccessor(root) {
    if (!root.right) {
        return null; // won't ever happen though
    }
    
    let successor = root.right;
    while (successor.left) {
        successor = successor.left;
    }
    
    return successor;
}
