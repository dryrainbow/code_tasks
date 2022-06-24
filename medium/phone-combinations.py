# https://leetcode.com/problems/letter-combinations-of-a-phone-number/

from typing import List


letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if digits == "":
            return []
        comb = []
        for letter in letters[digits[0]]:
            comb.append(letter)
        
        return self.letterCombinationsReq(comb, digits[1:])
    
    def letterCombinationsReq(self, combinations, digits):
        if len(digits) == 0:
            return combinations

        cur_digit = digits[0]
        new_combinations = []
        for letter in letters[cur_digit]:
            for comb in combinations:
                new_combinations.append(comb + letter)
        return self.letterCombinationsReq(new_combinations, digits[1:])

s = Solution()

print(s.letterCombinations("23"))