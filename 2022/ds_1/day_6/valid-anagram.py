# https://leetcode.com/problems/valid-anagram/submissions/

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        store = [0] * 26
        aKey = ord('a')

        for i, j in s, t:
            store[ord(i) - aKey] += 1
            store[ord(j) - aKey] -= 1
        for i in store:
            if i != 0:
                return False
        return True