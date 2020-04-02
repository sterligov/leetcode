/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let m = {};
    stones.forEach(v => {
        m[v] = true;
    });
    
    let q = [[1, 0]];
    let visited = {};
    while (q.length > 0) {
        let [cur, prev] = q[q.length - 1];
        q = q.slice(0, q.length - 1);
        if (visited[cur+"_"+prev] !== undefined || cur <= prev || m[cur] === undefined) {
            continue;
        }
        if (cur === stones[stones.length - 1]) {
            return true;
        }
        visited[cur + "_" + prev] = true;
        let diff = cur - prev;
        q.push([cur+diff+1, cur]);
        q.push([cur+diff, cur]);
        q.push([cur+diff-1, cur]);
    }
    
    return false;
};