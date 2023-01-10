// https://leetcode.com/problems/my-calendar-i/

var MyCalendar = function() {
    this.eventsHead = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if (this.eventsHead.length == 0) {
        this.eventsHead.push([start, end])
        return true
    }

    let isIntersect = this.eventsHead.some((val)=> {
        return (end > val[0] && end <= val[1]) || (val[1] > start && val[1] <= end)
    })
    if (isIntersect) {
        return false
    }
    this.eventsHead.push([start, end])
    return true
};



/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

const cal = new MyCalendar()

let a = [[37,50],[33,50],[4,17],[35,48],[8,25]]
a.forEach((val)=>{
    console.log(cal.book(val[0], val[1]))
})

