// https://leetcode.com/problems/generate-parentheses/
// brut force solution
// too slow
// I think it's O(2 ** n)

function generateParenthesis(n) {
    let count = n * 2;
    let lenMin = 1 << (count - 1)
    let lenMax = (1 << (count))
    let result = new Set()
    for (let i = lenMin; i < lenMax; i ++) {
        let p = i.toString(2)
            .replaceAll('1', '(')
            .replaceAll('0', ')')
        if (isValidParenthesis(p)) {
            result.add(p)
        }
    }
    return Array.from(result)
}

function isValidParenthesis(parenthesis) {
    let stack = []
    for (let i = 0; i < parenthesis.length; i ++) {
        let ch = parenthesis[i]
        if (ch === '(') {
            stack.push(ch)
        } else {
            if (stack.pop() ==='(') {
                continue
            }
            return false;
        }
    }
    return stack.length === 0;
}
console.log(generateParenthesis(2))
