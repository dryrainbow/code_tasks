// https://leetcode.com/problems/valid-parentheses/submissions/

function isValid(s: string): boolean {
    const stack: string[] = [];
    const dict: {[key: string]: string} = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let p of s) {
        if (dict[p]) {
            stack.push(p)
        } else {
            let lastPar = stack.pop()
            if (!lastPar) return false;

            if (dict[lastPar] === p) {
                continue;
            } else {
                return false;
            }
        }
    }

    return !stack.length;
};

console.assert(isValid("()[]{}"))
console.assert(isValid(""))
console.assert(isValid("({{[]}})(") === false)
console.assert(isValid("(") === false)
