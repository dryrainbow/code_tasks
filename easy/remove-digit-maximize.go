package main

import (
	"fmt"
	"strings"
)

func removeDigit(number string, digit byte) string {
	newNumber := make([]string, len(number)-1)
	count := strings.Count(number, string(digit))
	found := 0

	for i := 0; i < len(number); i++ {
		currentDig := number[i]
		if currentDig == digit {
			found++
			if i+1 < len(number) && count != found {
				nextDig := number[i+1]
				if nextDig > currentDig {
					newNumber = append(newNumber, number[i+1:])
					break
				}
				newNumber = append(newNumber, string(number[i]))
			}
			if count == found {
				newNumber = append(newNumber, number[i+1:])
				break
			}
		} else {
			newNumber = append(newNumber, string(number[i]))
		}
	}
	return strings.Join(newNumber, "")
}

func main() {
	fmt.Println(removeDigit("551", '5'))
}
