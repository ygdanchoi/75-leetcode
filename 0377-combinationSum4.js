// https://leetcode.com/problems/combination-sum-iv/

function combinationSum4(nums, target) {
    const memo = new Array(target + 1).fill(-1);
    
    function step(curr) {
        if (curr > target) {
            return 0;
        } else if (curr === target) {
            return 1;
        } else if (memo[curr] !== -1) {
            return memo[curr];
        }
        
        let combos = 0;
        
        nums.forEach(num => {
            combos += step(curr + num);
        });
        
        memo[curr] = combos;
        return combos;
    }
    
    return step(0);
}