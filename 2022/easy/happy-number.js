var isHappy = function(n) {
    let res = false
    let curNum = n
    let store = {}
    while (curNum != 1) {
        if (store[curNum]) {
            return false
        }
        store[curNum] = true
        let gen = getNumbers(curNum)
        curNum = 0
        for (let num of gen) {
            curNum += num ** 2
        }
    }

    return curNum == 1
};


function *getNumbers(n) {
    let cur = n;
    
    while (cur != 0) {
        yield cur % 10;
        cur = Math.floor(cur / 10)
    }
}

console.log(isHappy(2))