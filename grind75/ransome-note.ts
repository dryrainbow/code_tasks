function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazinLetters = Array(26).fill(0)
    for (let i = 0; i < magazine.length; i++) {
        magazinLetters[getIndex(magazine[i])]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        magazinLetters[getIndex(ransomNote[i])]--;
        if (magazinLetters[getIndex(ransomNote[i])] < 0) {
            return false;
        }
    }
    return true;
};

function getIndex(letter: string) {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0);
}