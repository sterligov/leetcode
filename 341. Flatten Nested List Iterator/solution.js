/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = [];
    this.list = nestedList.slice();
    this.cur = -1;
    this.buffer = [];
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    let r = this.next();
    if (r === null) {
        return false;
    }
    this.buffer.push(r);
    return true;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    if (this.buffer.length > 0) {
        let r = this.buffer[0];
        this.buffer = this.buffer.slice(1);
        return r;
    }
    while (true) {
        this.cur += 1;
        if (this.list[this.cur] === undefined) {
            if (!this.stack.length) {
                return null;
            }
            [this.list, this.cur] = this.stack[this.stack.length - 1];
            this.stack = this.stack.slice(0, this.stack.length - 1);
            continue;
        }

        if (this.list[this.cur].isInteger()) {
            return this.list[this.cur].getInteger();
        }

        this.stack.push([this.list, this.cur]);
        this.list = this.list[this.cur].getList();
        this.cur = -1;
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/