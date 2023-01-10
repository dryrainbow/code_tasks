// https://leetcode.com/problems/design-hit-counter/
// Fast but a lot of memory, I think it can be solved effectively

class HitCounter {
    private store: {[key: number]: number} = {}
    private hitInterval = 300

    constructor() {
    }

    hit(timestamp: number): void {
        if (this.store[timestamp]) {
            this.store[timestamp] += 1
        } else {
            this.store[timestamp] = 1
        }
    }

    getHits(timestamp: number): number {
        let result = 0
        Object.keys(this.store).forEach(tstmp=>{
            let num = Number(tstmp);
            if (num > timestamp - this.hitInterval && num <= timestamp) {
               result += this.store[tstmp];
            }
        })
        return result
    }
}

// let hitCounter = new HitCounter();
// console.log(hitCounter.hit(1));       // hit at timestamp 1.
// console.log(hitCounter.hit(1));       // hit at timestamp 2.
// console.log(hitCounter.hit(1));       // hit at timestamp 3.
// console.log(hitCounter.getHits(300));   // get hits at timestamp 4, return 3.
// console.log(hitCounter.hit(300));     // hit at timestamp 300.
// console.log(hitCounter.getHits(300)); // get hits at timestamp 300, return 4.
// console.log(hitCounter.getHits(301)); // get hits at timestamp 301, return 3.