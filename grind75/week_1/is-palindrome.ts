function isPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;
    while (left < right) {
        const leftLetter = s[left].toLocaleLowerCase();
        const rightLetter = s[right].toLocaleLowerCase();
        const leftCode = leftLetter.charCodeAt(0);
        const rightCode = rightLetter.charCodeAt(0);
        console.log({
            leftLetter,
            rightLetter,
            leftCode,
            rightCode,
        })
        if (!(leftCode >= 97 && leftCode <= 122) && !(leftCode >= 48 && leftCode <= 57)) {
            left++;
            continue;
        }
        if (!(rightCode >= 97 && rightCode <= 122) && !(rightCode >= 48 && rightCode <= 57)) {
            right--;
            continue;
        }
        if (leftLetter !== rightLetter) return false;
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("0P"))