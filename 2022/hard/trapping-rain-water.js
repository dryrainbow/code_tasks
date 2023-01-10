/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height < 3) {
        return 0
    }

    const highest = []
    let lastMax = 0
    height.forEach((h, i) => {
        let left = height[i - 1] || 0
        let right = height[i + 1] || 0

        if (h >= left && h >= right && (h > left || h > right)) {
            let lastHighest = height[highest[highest.length - 1]]
            while(lastHighest < h && lastHighest < lastMax) {
                highest.pop()
                lastHighest = height[highest[highest.length - 1]]
            }
            highest.push(i)
            lastMax = Math.max(height[i], lastMax)
        }
    })
    if (highest.length < 2) return 0

    let result = 0
    for(let i = 0; i < highest.length - 1; i ++) {
        for (let j = highest[i] + 1; j < highest[i + 1]; j ++) {
            result += Math.max(Math.min(height[highest[i]], height[highest[i + 1]]) - height[j], 0)
        }
    }
    return result
};

console.log(trap([5,4,1,2]))