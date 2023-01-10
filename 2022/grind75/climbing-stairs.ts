function climbStairs(n: number): number {
    let store = Array(n)
    store[0] = 1;
    store[1] = 2;

    for (let i = 2; i < n; i++) {
        store[i] = store[i - 1] + store[i - 2]
    }

    return store[n - 1]
};

console.log(climbStairs(10))