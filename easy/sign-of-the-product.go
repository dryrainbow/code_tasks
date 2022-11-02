package main

func arraySign(nums []int) int {
	negative := uint16(0)

	for _, n := range nums {
		if n == 0 {
			return 0
		}
		if n < 0 {
			negative++
		}
	}
	if negative%2 == 0 {
		return 1
	} else {
		return -1
	}
}
