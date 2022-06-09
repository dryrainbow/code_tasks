// https://leetcode.com/problems/implement-stack-using-queues/

class MyStack {
    private queue1: Queue<number> = [];
    private queue2: Queue<number> = [];

    push(x: number): void {
        if (this.queue1.length) {
            this.queue2.unshift(x)
            this.fromOneToAnother(this.queue1, this.queue2)
        } else {
            this.queue1.unshift(x)
            this.fromOneToAnother(this.queue2, this.queue1)
        }
    }

    pop(): number | undefined {
        if(this.queue1.length) {
            return this.queue1.pop()
        } else {
            return this.queue2.pop()
        }
    }

    top(): number | undefined {
        let result;
        if(this.queue1.length) {
            result = this.queue1.pop()
        } else {
            result = this.queue2.pop()
        }
        this.push(result as number)
        return result
    }

    empty(): boolean {
        console.log(this.queue1.length, this.queue2.length)
        return !(Boolean(this.queue1.length) || Boolean(this.queue2.length))
    }

    private fromOneToAnother(from: Queue<number>, to: Queue<number>) {
        while (from.length) {
            let el = from.pop()
            if (!el) return;
            to.unshift(el)
        }
    }
}

interface Queue<T> {
    unshift(n: T): void
    pop(): T | undefined
    length: number
}