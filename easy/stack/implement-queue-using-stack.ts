// https://leetcode.com/problems/implement-queue-using-stacks/submissions/

/**
 * Time complexity is push - O(1), pop - O(n), peek and empty - O(1)
 * space - O(n)
 */

class MyQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];
    private head: number | undefined;
    constructor() {

    }

    push(x: number): void {
        if (this.stack2.length === 0) {
            this.head = x;
        }
        this.stack2.push(x);
    }

    pop(): number | undefined {
        let el = this.stack2.pop();
        while (el) {
            this.stack1.push(el)
            el = this.stack2.pop()
        }
        let result = this.stack1.pop()
        el = this.stack1.pop()
        this.head = el;
        while (el) {
            this.stack2.push(el)
            el = this.stack1.pop()
        }

        return result
    }

    peek(): number | undefined {
        return this.head
    }

    empty(): boolean {
        return this.stack2.length === 0
    }
}

// let queue = new MyQueue()
// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.push(4)
// queue.push(5)
// console.log(queue.pop())

