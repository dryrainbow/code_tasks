//  https://leetcode.com/problems/first-bad-version/

#include <iostream>
// The API isBadVersion is defined for you.
bool isBadVersion(int version) {
    return version > 3;
}

class Solution {
public:
    int firstBadVersion(int n) {
        int left, right, mid;
        if (n == 1) return isBadVersion(n);
        left = 1; 
        right = n;

    
        while (left <= right) {
            mid = left + (right - left) / 2;

            bool midIsBad = isBadVersion(mid);
    
            if (midIsBad && (mid - 1 == 0 || !isBadVersion(mid - 1))) {
                return mid;
            }
            if (midIsBad) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
};

int main () {
    auto s = new Solution();
    std::cout << s->firstBadVersion(20);
    return 0;
}