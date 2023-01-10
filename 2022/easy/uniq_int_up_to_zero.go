package main

func sumZero(n int) []int {
	result := make([]int, n)
	i := 0
	if n%2 == 1 {
		result[0] = 0
		i++
	}
	currentNumber := 1
	for i < n-1 {
		result[i] = currentNumber
		result[i+1] = -currentNumber
		currentNumber++
		i += 2
	}

	return result
}
