// https://leetcode.com/problems/maximal-network-rank/
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const matrix = (new Array(n).fill(0)).map(()=>(new Array(n)).fill(0))
    roads.forEach(road=>{
        matrix[road[0]][road[1]] = 1
        matrix[road[1]][road[0]] = 1
    })
    console.log(matrix)
    let maxVal = 0
    let maxCity = -1

    for (let i = 0; i < n; i ++){
        let counter = 0
        for (let j = 0; j < n; j ++) {
            counter += matrix[i][j]
        }
        if (maxVal < counter) {
            maxVal = counter
            maxCity = i
        }
    }

    let maxVal2 = 0
    for (let i = 0; i < n; i ++){
        if (i === maxCity) continue;
        let counter = 0
        for (let j = 0; j < n; j ++) {
            if (j === maxCity) continue;
            counter += matrix[i][j]
        }
        if (maxVal2 < counter) {
            maxVal2 = counter
        }
    }

    return maxVal + maxVal2
};

console.log(maximalNetworkRank(5, [[2,3],[0,3],[0,4],[4,1]]))