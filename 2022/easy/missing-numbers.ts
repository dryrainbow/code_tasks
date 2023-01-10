
// https://leetcode.com/problems/missing-number/

function missingNumber(nums: number[]): number {
    const l = nums.length;
    const sum = nums.reduce((acc, val) => acc + val);
    let fullSum: number;
    if (l % 2 === 0) {
        fullSum = l * (l / 2) + (l / 2);
    } else {
        fullSum = l * (Math.ceil(l / 2));
    }
    return fullSum - sum;
};

console.assert(missingNumber([9,6,4,2,3,5,7,0,1]) === 8)
console.assert(missingNumber([3,0,1]) === 2)