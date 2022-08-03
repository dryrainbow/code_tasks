/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const base = 26
    const start = 'A'.charCodeAt(0)
    let res = 0

    return columnTitle.split('').reduce((res, ch, i)=>{
        const curNum = ch.charCodeAt(0) - start + 1
        const degree = columnTitle.length - i - 1
        console.log({ch, i, degree, curNum})
        return res + (curNum * (base ** degree))
    }, 0)
};

console.log(titleToNumber("ZY"  ))