// https://leetcode.com/problems/design-circular-queue/
// strange task, I don't know why it is the circularQueue

class MyCircularQueue {
    private size: number
    private store: number[] = []

    constructor(k: number) {
        this.size = k;
    }

    enQueue(value: number): boolean {
        if (this.store.length === this.size) {
            return false;
        }
        this.store.unshift(value)
        return true
    }

    deQueue(): boolean {
        if (this.store.length === 0) {
            return false
        }
        this.store.pop();
        return true
    }

    Front(): number {
        return this.store[this.store.length - 1] === undefined?  -1: this.store[this.store.length - 1]
    }

    Rear(): number {
        return this.store[0] === undefined?  -1: this.store[0]
    }

    isEmpty(): boolean {
        return this.store.length === 0
    }

    isFull(): boolean {
        return this.store.length === this.size
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */