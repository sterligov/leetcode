/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let visited = {};
    while (n != 1) {
        if (visited[n] !== undefined) {
            return false;
        }
        visited[n] = true;
        n = digitSquare(n);
    }
    return true;
};

function digitSquare(n) {
    let ans = 0;
    while (n != 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        ans += digit * digit;
    }
    return ans;
}