package main

import "fmt"

func containsDuplicate(nums []int) bool {
	res := make(map[int]bool, len(nums))
	for _, num := range nums {
		_, exist := res[num]
		if exist {
			return true
		}
		res[num] = true
	}

	return false
}

func main() {
	fmt.Println(containsDuplicate([]int{1, 2, 3, 4, 5}))
	fmt.Println(containsDuplicate([]int{1, 2, 3, 1, 5}))
}
