/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dict = {};
    wordDict.forEach(v => {
        dict[v] = true;
    });
    
    let nextWord = n => {
        let word = '';
        let ans = [];
        for (let i = n; i < s.length; i++) {
            word += s[i];
            if (dict[word] !== undefined) {
                ans.push(i+1);
            }
        }
        
        return ans;
    }
    
    let q = [0];
    let i = 0;
    let visited = {};
    while (q.length > i) {
        let cur = q[i++];
        if (visited[cur] !== undefined) {
            continue;
        }
        if (cur === s.length) {
            return true;
        }
        visited[cur] = true;
        let next = nextWord(cur);
        if (next.length == 0) {
            continue;
        }
        q.push(...next);
    }
    
    return false;
};