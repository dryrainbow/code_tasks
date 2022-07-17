class Solution(object):
    def searchMatrix(self, matrix, target):

        i = self.search([x[0] for x in matrix], target)
        if (matrix[i][0] == target):
            return True
        res = self.search(matrix[i], target)

        return matrix[i][res] == target

    def search(self, arr, target):
        print(arr)
        left = 0
        right = len(arr) - 1
        mid = 0
        while(left < right):
            mid = left + (right - left) // 2
            print(left, right, mid)
            if (arr[mid] > target):
                right = mid - 1
            elif (arr[mid] < target):
                left = mid + 1
            else:
                return mid
        if arr[left] > target:
            return left - 1
        return left


m = [[-10,-8],[-6,-5],[-2,-2],[-1,0],[3,4],[7,7],[8,9],[10,10],[11,11],[12,14],[15,16],[17,19],[20,21],[22,22],[25,27],[28,30],[32,32],[35,36]]

print(Solution().searchMatrix(m, 16))
