var isInterleave = function(s1, s2, s3) {
    let stack = [];
    let p1 = 0;
    let p2 = 0;
    
    let i = 0;
    let visited = {};
    while (i < s3.length) {
        let ch1 = s1[p1];
        let ch2 = s2[p2];
        let ch3 = s3[i];
        if (ch1 === ch3 && ch2 === ch3) {
            stack.push([p1, p2, i]);
        }
        
        if (ch1 === ch3) {
            p1++;
        } else if (ch2 === ch3) {
            p2++;
        } else if (stack.length > 0) {
            [p1, p2, i] = stack[stack.length - 1];
            stack = stack.slice(0, stack.length - 1);
            p2++;
        } else {
            return false;
        }
        
        i++;
    }
    if (p1 !== s1.length || p2 !== s2.length) {
        return false;
    }
    
    return true;
};