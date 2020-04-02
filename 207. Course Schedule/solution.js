/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let list = [];
    for (let i = 0; i < numCourses; i++) {
        list[i] = [];
        // for (let j = 0; j < numCourses; j++) {
        //     list[i][j] = 0;
        // }
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        list[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    
    let visited = {};
    
    for (let i = 0; i < list.length; i++) {
        if (visited[i] === undefined && list[i].length > 0) {
            if (!dfs(visited, list, i)) {
                return false;
            }
        }
    }    
    
    return true;
};

function dfs(visited, list, vertex) {
    let q = [[vertex, {}]];
    let vis = {};

    while(q.length > 0) {
        [vertex, vis] = q[q.length - 1];
        q = q.slice(0, q.length - 1);
        if (vis[vertex] !== undefined) {
            return false;
        }
        vis[vertex] = true;
        visited[vertex] = true;
        for (let i = 0; i < list[vertex].length; i++) {
            q.push([list[vertex][i], {...vis}]);
        }
    }
    
    return true;
}