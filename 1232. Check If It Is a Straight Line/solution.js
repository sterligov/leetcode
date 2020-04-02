/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let p1 = coordinates[0];
    let p2 = coordinates[1];
    for (let i = 2; i < coordinates.length; i++) {
        let y = coordinates[i][1];
        let x = coordinates[i][0];
        if (p1[0] == p2[0] && x == p1[0]) {
            continue;
        }
        if (p1[1] == p2[1] && y == p1[1]) {
            continue;
        }
        if ((y - p1[1]) / (p2[1] - p1[1]) != (x - p1[0]) / (p2[0] - p1[0])) {
            console.log(coordinates[i]);
            return false;
        }
    }
    
    return true;
};
