// https://leetcode.com/problems/logger-rate-limiter
// Time complexity: O(1)
// Space complexity: O(n)

var Logger = function() {
    this.store = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.store.has(message)) {
        const prevTimestamp = this.store.get(message)
        if (timestamp - prevTimestamp < 10) {
            return false
        }
    }
    this.store.set(message, timestamp)
    return true
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
