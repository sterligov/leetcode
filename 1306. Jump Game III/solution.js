/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    if (arr[start] === undefined) {
        return false;
    }
    if (arr[start] === 0) {
        return true;
    }
    let s = [start];
    let visited = {};
    while (s.length > 0) {
        let cur = s[s.length - 1];
        s = s.slice(0, s.length - 1);
        if (visited[cur]) {
            continue;
        }
        visited[cur] = true;
        if (arr[cur] + cur < arr.length && visited[arr[cur] + cur] === undefined) {
            if (arr[arr[cur] + cur] === 0) {
                return true;
            }
            s.push(arr[cur] + cur);
        }
        if (cur - arr[cur] >= 0 && visited[cur - arr[cur]] === undefined) {
            if (arr[cur - arr[cur]] === 0) {
                return true;
            }
            s.push(cur - arr[cur]);
        }
    }
    return false;
};