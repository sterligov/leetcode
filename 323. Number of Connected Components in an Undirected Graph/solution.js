/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let list = [];
  for (let i = 0; i < n; i++) {
      list[i] = [];
  }
  
  for (let i = 0; i < edges.length; i++) {
      list[edges[i][0]].push(edges[i][1]);
      list[edges[i][1]].push(edges[i][0]);
  }
  let vis = {};
  let ans = 0;
  for (let i = 0; i < n; i++) {
      if (vis[i] === undefined) {
          ans++;
          let q = [i];
          let j = 0;
          while(q.length > j) {
              let vertex = q[j++];
              if (vis[vertex] !== undefined) {
                  continue;
              }
              vis[vertex] = true;
              for (let j = 0; j < list[vertex].length; j++) {
                  q.push(list[vertex][j]);
              }
          }
      }
  }
  return ans;
};