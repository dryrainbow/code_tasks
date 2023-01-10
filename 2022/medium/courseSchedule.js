
class Node {
    val = 0;
    dependencies = new Set()
    constructor(val) {
        this.val = val
    }
    add(node) {
        this.dependencies.add(node)
    }
    get dependenciesArr() {
        
        let res = []
        for (let el of this.dependencies.values() ){
            res.push(el.val, ...el.dependenciesArr)
        }
        return res
    }
    get isLoop() {
        return this.dependenciesArr.includes(this.val)
    }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let nodes = {}
    prerequisites.forEach((prereq) => {
        let [course, dep] = prereq;
        if (!nodes[course]) {
            nodes[course] = new Node(course)
        }
        let depNode = nodes[dep]? nodes[dep] : new Node(dep)
        nodes[dep] = depNode
        nodes[course].add(depNode)
    })
    
    for (const key in nodes) {
        console.log(nodes[key].dependenciesArr)
        // if (nodes[key].isLoop) return false;
    }
    return true

    // let nodesKeys = Object.keys(nodes)
    // for (let i = 0; i < nodesKeys.length; i++) {
    //     if (!canFinishReq(nodes, {}, nodesKeys[i])) {
    //         return false
    //     }
    // }
    // return true
};

console.log(canFinish(4, [[0,1], [1, 2], [2, 0], [2, 3]]))