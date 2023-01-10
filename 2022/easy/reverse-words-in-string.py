# https://leetcode.com/problems/reverse-words-in-a-string-iii/

class Solution:
    def reverseWords(self, s):
        str_array = list(s)
        left = -1
        right = None
        for i in range(len(str_array)):
            if str_array[i] == ' ':
                if right != None:
                    self.swap(str_array, left + 1, right)
                left = i
            else:
                right = i
            if i == len(str_array) - 1 and right != None:
                self.swap(str_array, left + 1, right)

        return ''.join(str_array)
    
    def swap(self, arr, left, right):
        width = (right + 1 - left) // 2
        for i in range(width):
            l = i + left
            r = right - i
            arr[l], arr[r] =  arr[r], arr[l]
