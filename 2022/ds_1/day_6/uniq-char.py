# https://leetcode.com/problems/first-unique-character-in-a-string/solution/

import collections

class Solution(object):
    def firstUniqChar(self, s):
        chars = collections.OrderedDict()
        for i, c in enumerate(s):
            if c in chars:
                chars[c][1] += 1
            else:
                chars[c] = [i, 1]
        for obj in chars:
            if chars[obj][1] == 1:
                return chars[obj][0]
        return -1

print(Solution().firstUniqChar("leetcode"))