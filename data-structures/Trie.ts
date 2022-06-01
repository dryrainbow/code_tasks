
const alphabetSize = 26;
class TrieNode {
    private children: TrieNode[];
    private isValue: boolean = false;

    constructor() {
        this.children = new Array(alphabetSize)
    }

    public set(key: string) {
        let head: TrieNode = this;
        for (let i = 0; i < key.length; i++) {
            const indexOfKey = this.getKeyIndex(key[i])
            if (!head.children[indexOfKey]) {
                head.children[indexOfKey] = new TrieNode()
            }
            head = head.children[indexOfKey]
    
            if (i === key.length - 1) {
                head.isValue = true;
            }
        }
    }

    public search(key: string): boolean {
        let head: TrieNode = this;
        for (let i = 0; i < key.length; i++) {
            const indexOfKey = this.getKeyIndex(key[i])
            if (head.children[indexOfKey]) {
                head = head.children[indexOfKey]
            } else {
                return false
            }
            if (i === key.length - 1) {
                return head.isValue
            }
        }
        return false
    }

    public getByPrefix(prefix: string): string[] {
        let head: TrieNode = this;
        for (let i = 0; i < prefix.length; i++) {
            const indexOfKey = this.getKeyIndex(prefix[i])
            if (head.children[indexOfKey]) {
                head = head.children[indexOfKey]
            } else {
                return []
            }
        }
        let words = []
        let nodes = [head]
        while(nodes.length) {
            let node = nodes.pop()
            for (let i = 0; i < node.children.length; i ++) {
                let el = node.children[i]
                if (el) {
                    nodes.push(el)

                }
            }
        }
        
    }

    public getAllWords(node: TrieNode): string[] {
        let words = []
        node.children.forEach(element => {
            words.push()
        });
    }


    private getKeyIndex(key: string): number {
        const startChartCode = 'a'.charCodeAt(0);
        return key.charCodeAt(0) - startChartCode;
    }
}


const a = new TrieNode()
a.set('mama')
console.log(a)
console.log(a.search('mama'))