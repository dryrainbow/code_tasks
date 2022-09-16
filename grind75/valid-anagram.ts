function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const store: number[] = Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        store[codeOf(s[i])]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (!store[codeOf(t[i])]) return false;
        store[codeOf(t[i])]--;
    }
    return !store.some(count=>count)
};

const codeOf = (char: string) => char.charCodeAt(0) - 'a'.charCodeAt(0)

console.log(isAnagram("anagram", "nagaram"))