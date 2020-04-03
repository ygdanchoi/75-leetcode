// https://leetcode.com/problems/super-egg-drop/

function superEggDrop(K, N) {
    const memo = new Array(K + 1).fill(-1).map(row => {
        return new Array(N + 2).fill(-1);
    });
    
    function step(eggs, possibilities) {        
        if (possibilities === 1) {
            return 0;
        } else if (eggs === 1) {
            return possibilities - 1;
        } else if (memo[eggs][possibilities] !== -1) {
            return memo[eggs][possibilities];
        }
        
        let best = Infinity;
        let l = 1;
        let r = possibilities - 1;
        
        while (l <= r) {
            const i = Math.floor((l + r) / 2);
            
            const broken = step(eggs - 1, i);
            const intact = step(eggs, possibilities - i);
            const curr = 1 + Math.max(broken, intact);
            best = Math.min(best, curr);
            
            if (broken < intact) {
                l = i + 1;
            } else {
                r = i - 1;
            }
        }
        
        memo[eggs][possibilities] = best;
        return best;
    }
    
    return step(K, N + 1);
}