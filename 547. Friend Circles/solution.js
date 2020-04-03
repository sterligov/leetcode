/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if (M.length == 0) {
        return 0;
    }
    
    let ans = 0;
    let visited = {};
    for (let j = 0; j < M.length; j++) {
        if (visited[j] === undefined) {
            ans++;
            let q = [j];
            let k = 0;
            
            while (q.length > k) {
                let cur = q[k++];
                if (visited[cur] !== undefined) {
                    continue;
                }
                visited[cur] = true;
                for (let i = 0; i < M[cur].length; i++) {
                    if (M[cur][i] == 1 && i != cur) {
                        q.push(i);
                    }
                }
            }
        }
    }
    
    return ans;
};