function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const stack = [[sr, sc]];
    const startColor = image[sr][sc];
    if (startColor == color) return image;

    while(stack.length) {
        const [r, c] = stack.pop() as number[];
        if (image[r][c] == startColor) {
            image[r][c] = color;
            stack.push(...getShift(image, r, c))
        }
    }
    
    return image;
};

const getShift = (matrix: number[][], r: number, c: number) => {
    const shifts: number[][] = []

    if (r + 1 <= matrix.length - 1) {
        shifts.push([r + 1, c])
    }
    if (r - 1 >= 0) {
        shifts.push([r - 1, c])
    }
    if (c + 1 <= matrix[0].length - 1) {
        shifts.push([r, c + 1])
    }
    if (c - 1 >= 0) {
        shifts.push([r, c - 1])
    }

    return shifts;
}

console.log(floodFill(
    [[0,0,0],[0,0,0]],
    0,
    0,
    0)
)