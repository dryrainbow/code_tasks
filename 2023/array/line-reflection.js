/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function(points) {
    if (points.length == 0) return true

    let minX = Infinity;
    let maxX = -Infinity;

    let store = new Set()
    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i]
        minX = Math.min(minX, x)
        maxX = Math.max(maxX, x)
        store.add(`${x}:${y}`)
    }

    let sum = (maxX + minX)

    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i]
        if (!store.has(`${sum - x}:${y}`)) {
            return false
        }
    }

    return true
};
console.log(isReflected([[0,0],[1,0]]))