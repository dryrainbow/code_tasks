function isValid(s: string): boolean {
    const dict = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        if (dict[p as keyof typeof dict]) {
            stack.push(p)
        } else {
            if (stack.length === 0) return false;
            const lastPar = stack.pop()
            if (dict[lastPar as keyof typeof dict] !== p) return false;
        }
    }

    return stack.length === 0;
};
