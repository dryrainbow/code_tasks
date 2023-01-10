function twoSum(nums: number[], target: number): number[] {
    const numsMap: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (numsMap[n] !== undefined) {
            return [numsMap[n], i]
        }
        numsMap[target - n] = i
    }
    return [-1, -1]
};

console.log(twoSum([3,2,4], 6))