package main

import (
	"fmt"
)
func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}


func maxSubArray(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	var curMax = nums[0];
	var resultMax = nums[0];

	for _, num := range nums[1:] {
		curMax = Max(num + curMax, num);
		resultMax = Max(resultMax, curMax)
	}

	return resultMax;
}

func main() {
	fmt.Println(maxSubArray([]int{1,2,3,-10,4,5}))
}
