// https://leetcode.com/problems/interval-list-intersections/

const getIntervalsIntersection = ([x1, y1], [x2, y2]) => {
    let x3 = Math.max(x1, x2);
    let y3 = Math.min(y1, y2);
    return [x3, y3]
}

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    const result = [];
    let firstListPointer = 0;
    let secondListPointer = 0;

    while (firstList.length > firstListPointer && secondList.length > secondListPointer) {
        console.log(result)
        const [x1, y1] = firstList[firstListPointer]
        const [x2, y2] = secondList[secondListPointer]

        if (x1 > y2) {
            secondListPointer++;
            continue
        }
        if (x2 > y1) {
            firstListPointer++;
            continue
        }

        if (x1 <= x2) {
            result.push(getIntervalsIntersection([x1, y1], [x2, y2]))
        } else {
            result.push(getIntervalsIntersection([x2, y2], [x1, y1]))
        }
        if (y1 >= y2) {
            secondListPointer++;
        } else {
            firstListPointer++;
        }
    }
    return result
};

console.log(intervalIntersection(
    [[0,4],[7,8],[12,19]],
    [[0,10],[14,15],[18,20]]
))
