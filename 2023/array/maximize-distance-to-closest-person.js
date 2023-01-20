// https://leetcode.com/problems/maximize-distance-to-closest-person/

const getDistanceFromMiddle = (seqLength) => (seqLength % 2 == 0 ? seqLength / 2 - 1: Math.floor(seqLength / 2)) + 1

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let maxDistance = 0
    let currentEmptySeq = 0
    let lastTakenSeat = -1;
    for (let i = 0; i < seats.length; i++) {
        const seat = seats[i];

        if (seat == 0) {
            currentEmptySeq++;
        } else {
            if(lastTakenSeat == -1 && currentEmptySeq != 0) {
                maxDistance = currentEmptySeq;
                lastTakenSeat = i
                currentEmptySeq = 0
                continue
            }
            if (currentEmptySeq != 0) {
                maxDistance = Math.max(maxDistance, getDistanceFromMiddle(currentEmptySeq))
                currentEmptySeq = 0;
            }
            lastTakenSeat = i
        }
    }
    if (lastTakenSeat != seats.length - 1) {
        maxDistance = Math.max(maxDistance, seats.length - 1 - lastTakenSeat)
    }
    return maxDistance
};
console.log(maxDistToClosest([0,1,0,0,0,0,0,0,1,1,0,1,1]))