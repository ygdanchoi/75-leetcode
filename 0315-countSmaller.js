// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

function countSmaller(nums) {
  const counts = [];
  let root = null;
  nums.reverse();
  
  for (const num of nums) {
      root = add(num, root, 0);
  }
  
  function add(num, node, count) {
      if (!node) {
          counts.push(count);
          return new Node(num);
      } else if (num <= node.val) {
          node.count++;
          node.left = add(num, node.left, count);
      } else {
          node.right = add(num, node.right, count + node.count);
      }
      
      return node;
  }
  
  counts.reverse();
  return counts;
}

class Node {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.count = 1;
  }
}