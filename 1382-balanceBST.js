// https://leetcode.com/problems/balance-a-binary-search-tree/

function balanceBST(root) {
  return createTree(getInorderTraversal(root));
}

function getInorderTraversal(root) {
  const nums = [];
  
  function step(node) {
      if (!node) {
          return;
      }
      
      step(node.left);
      nums.push(node.val);
      step(node.right);
  }
  
  step(root);
  return nums;
}

function createTree(nums) {
  if (nums.length === 0) {
      return null;
  }
  
  const m = nums.length >> 1;
  
  return new TreeNode(
      nums[m],
      createTree(nums.slice(0, m)),
      createTree(nums.slice(m + 1))
  );
}