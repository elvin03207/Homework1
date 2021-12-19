function removeGreatestRow(matrix) {
    let max = matrix[0][0];
    let index;
    for (let row = 0; row < matrix.length; row++) {
        for (let cell = 0; cell < matrix[row].length; cell++) {
            if (matrix[row][cell] > max) {
                max = matrix[row][cell];
                index = row;
            }
        }
    }
    matrix.splice(index, 1);
    return matrix;
}

console.log(removeGreatestRow( [ [1,2,3], [7,8,9], [4,5,6] ] ))
