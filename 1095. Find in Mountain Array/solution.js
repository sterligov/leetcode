/
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

function MountainArrCacheDecorator(mountainArr) {
    this.mountainArr = mountainArr;
    this.cache = {};
}

MountainArrCacheDecorator.prototype.length = function() {
    return this.mountainArr.length();
}

MountainArrCacheDecorator.prototype.get = function(index) {
    if (this.cache[index] !== undefined) {
        return this.cache[index];
    }
    
    const val = this.mountainArr.get(index);
    this.cache[index] = val;
    
    return val;
}

/
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let mountain = new MountainArrCacheDecorator(mountainArr);
    let highest = findHighestMountain(mountain);
    let index = binarySearch(mountain, target, 0, highest, 'asc');
    if (index === -1) {
        index = binarySearch(mountain, target, highest + 1, mountain.length(), 'desc');
    }
    return index;
};

function binarySearch(mountain, target, l, r, type) {
    while (l <= r) {
        let m = parseInt((l + r) / 2);
        let val = mountain.get(m);
        if (val === target) {
            return m;
        }
        
        if (val > target) {
            if (type === 'asc') {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (type === 'asc') {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    
    return -1;
}

function findHighestMountain(mountain) {
    const n = mountain.length();
    
    let l = 0;
    let r = n - 1;
    let val, next, prev;
    
    while (true) {
        let m = parseInt((l + r) / 2);
        val = mountain.get(m);
        prev = mountain.get(m - 1);
        next = mountain.get(m + 1);
        if (prev < val && val > next) {
            return m;
        } else if (prev < val && val < next) {
            l = m;
        } else {
            r = m;
        }
    }
}