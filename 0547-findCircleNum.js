// https://leetcode.com/problems/friend-circles/

function findCircleNum(M) {
    const seen = {};
    
    function step(i) {
        if (seen[i]) {
            return false;
        }
        
        seen[i] = true;
        
        for (let j = 0; j < M.length; j++) { // children
            if (M[i][j] === 0) {
                continue;
            }
            
            step(j);
        }
        
        return true;
    }
    
    let groups = 0;
    
    for (let i = 0; i < M.length; i++) {
        if (step(i)) {
            groups += 1;
        }
    }
    
    return groups;
}