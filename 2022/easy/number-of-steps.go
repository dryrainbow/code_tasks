package main

func numberOfStepsV1(num int) int {
	result := 0
	for num > 0 {
		if num%2 == 0 {
			num /= 2
		} else {
			num--
		}
		result++
	}
	return result
}

func numberOfSteps(num int) int {
	result := 0
	powerOfTwo := 1

	for powerOfTwo <= num {
		if powerOfTwo&num == powerOfTwo {
			result += 2
		} else {
			result += 1
		}
		powerOfTwo *= 2
	}
	if result > 0 {
		return result - 1
	}
	return result
}
