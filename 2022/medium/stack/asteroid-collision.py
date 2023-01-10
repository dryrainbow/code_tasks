# https://leetcode.com/problems/asteroid-collision/submissions/

from typing import List

class Solution:
    def mayTheyCollide(self, a, b):
        if (a < 0 and b < 0) or (a > 0 and b > 0):
            return False
        if a > b:
            return True
        return False

    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        result: List[int] = [];
        for asteroid in asteroids:
            if len(result) == 0:
                result.append(asteroid)
                continue
            
            cur = asteroid
            last = result.pop()
            while cur != None and last != None:
                if not self.mayTheyCollide(last, cur):
                    break

                if abs(cur) > abs(last):
                    if len(result) > 0:
                        last = result.pop()
                    else:
                        last = None
                elif abs(cur) < abs(last):
                    cur = None
                else:
                    last = None
                    cur = None

            if last != None:
                result.append(last)
            if cur != None:
                result.append(cur)
        return result        