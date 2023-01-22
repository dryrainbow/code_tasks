/**
 * @param {number[]} arr 
 */
function combSort(arr) {
    let step = arr.length - 1
    let factor = 1.247

    while (step > 1) {
        for (let i = 0; step + i < arr.length; i++) {
            if (arr[i] > arr[step + 1]) {
                [arr[i], arr[step + i]] = [arr[step + i], arr[i]]
            }
        }
        step /= factor
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

/**
 * 
 * @param {number[]} arr 
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i ++) {
        let j = i;
        let tmp = arr[i]
        while (j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1]
            j--;
        }
        arr[j] = tmp
    }
    return arr
}

const findMin = (arr, from) => {
    let min = from
    for (let i = from; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }
    }
    return min
}
/**
 * 
 * @param {number[]} arr 
 */
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i ++) {
        const min = findMin(arr, i);
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

console.log(selectionSort([1, 4, 5, 2, 4, 6, 1]))