/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let list = [];
    for (let i = 0; i < n; i++) {
        list[i] = [];
    }
    
    for (let i = 0; i < edges.length; i++) {
        list[edges[i][0]].push(edges[i][1]);
        list[edges[i][1]].push(edges[i][0]);
    }
    let vis = {};
    
       
    let q = [[0, -1]];
    while(q.length > 0) {
        let [vertex, from] = q[q.length - 1];
        q = q.slice(0, q.length - 1);
        if (vis[vertex] !== undefined) {
            return false;
        }
        vis[vertex] = true;
        for (let j = 0; j < list[vertex].length; j++) {
            if (from != list[vertex][j]) {
                q.push([list[vertex][j], vertex]);
            }
        }
    }
    return Object.keys(vis).length == n;
};