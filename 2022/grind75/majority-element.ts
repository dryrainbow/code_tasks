// Boyer-Moore voting algorithm

function majorityElement(nums: number[]): number {
    let currentMajority = nums[0];
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (counter === 0) {
            currentMajority = nums[0]
        }
        if (currentMajority == nums[i]) {
            counter ++;
        } else {
            counter --;
        }
    }
    return currentMajority;
};