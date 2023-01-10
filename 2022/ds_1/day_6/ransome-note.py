# https://leetcode.com/problems/ransom-note/solution/

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine):
            return False
        # it doesn't speed up
        if len((set(ransomNote) - set(magazine))) != 0:
            return False
        aKey = ord('a')
        store = [0] * 26
        for c in magazine:
            store[ord(c) - aKey] += 1
        for c in ransomNote:
            key = ord(c) - aKey
            store[key] -= 1
            if store[key] < 0:
                return False
        return True