// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
// O(N) Time and O(1) memory
// There is no the same solution on leetcode, I think because of ugly changing input array
// But it's acceptable
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    if (colors.length < 2) return 0
    let i = 0, j = 1, sum = 0;

    while(j < colors.length) {
        if (colors[i] === colors[j]) {
            if (neededTime[i] > neededTime[j]) {
                sum += neededTime[j]
                neededTime[j] = neededTime[i]
            } else {
                sum += neededTime[i]
            }
        }
        i ++;
        j ++;
    }
    return sum

};