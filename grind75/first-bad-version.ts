// https://leetcode.com/problems/first-bad-version/

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 0;
        let right = n;

        while (left <= right) {
            let mid = Math.trunc((left + right) / 2)
            const isBad = isBadVersion(mid)
            if (left == right) {
                if (isBad) return left;
                return left + 1 
            }
            if (!isBad) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return left
    };
};

let sol = solution((n: number)=>n >= 2)

console.log(sol(3))