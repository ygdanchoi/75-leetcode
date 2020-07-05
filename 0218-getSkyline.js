// https://leetcode.com/problems/the-skyline-problem/

function getSkyline(buildings) {
  const result = [];
  const heights = new Map();
  const commands = [{
      i: 0,
      height: 0
  }];
  
  for (const triplet of buildings) {
      commands.push({
          i: triplet[0],
          height: triplet[2]
      });
      commands.push({
          i: triplet[1],
          height: -triplet[2]
      });
  }
  
  commands.sort((a, b) => {
      if (a.i < b.i) {
          return -1;
      } else if (a.i > b.i) {
          return 1;
      } else {
          return b.height - a.height;
      }
  });
      
  for (const command of commands) {
      if (command.height >= 0) {
          if (!heights.has(command.height)) {
              heights.set(command.height, 0);
          }
          heights.set(command.height, heights.get(command.height) + 1);
      } else {
          heights.set(-command.height, heights.get(-command.height) - 1);
          if (heights.get(-command.height) === 0) {
              heights.delete(-command.height);
          }
      }
      
      const x = command.i;
      const y = [...heights]
          .map(pair => pair[0])
          .sort((a, b) => a - b)
          .last();
              
      if (result.length === 0 || result[result.length - 1][1] !== y) {
          if (x !== 0 || y !== 0) {
              result.push([x, y]);
          }
      }
  }
  
  return result;
}

Array.prototype.last = function() {
  return this[this.length - 1];
}