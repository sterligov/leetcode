/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let mem = {};
    
    const changer = amount => {
        if (amount < 0) {
            return -1;
        }
        if (amount == 0) {
            return 0;
        }
        
        if (mem[amount] !== undefined) {
            return mem[amount];
        }
        
        mem[amount] = Infinity;
        for (let i = 0; i < coins.length; i++) {
            const nCoin = changer(amount - coins[i]);
            if (nCoin != -1) {
                mem[amount] = Math.min(mem[amount], nCoin + 1);
            }
        }
        
        return mem[amount];
    };
    
    const ans = changer(amount);
    return ans === Infinity ? -1 : ans;
};