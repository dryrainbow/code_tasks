/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return countAndSayReq(1, 1, n)
};

function countAndSayReq(n, curCount, count) {
    let res = ''
    if (curCount == 1) {
        res = '1'
    } else {
        n = String(n)
        let prev = n[0]
        let prevCount = 1
        for (let i = 1; i <= n.length; i++) {
            if (n[i] != prev) {
                res += `${prevCount}${prev}`
                prevCount = 0
            }
            prev = n[i];
            prevCount ++;
        }
    }
    if (curCount == count) {
        return res
    }
    return countAndSayReq(res, curCount + 1, count);
}