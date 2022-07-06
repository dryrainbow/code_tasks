// https://leetcode.com/problems/number-of-1-bits/submissions/

typedef unsigned int uint32_t;


class Solution {
public:
    int hammingWeight(uint32_t n) {
        int result = 0;

        while (n > 0)
        {
            result = n & 1;
            n = n >> 1;
        }
        return result;
    }
};