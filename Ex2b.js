const matrix = [[1, 2, 3], [4, 5, 6,], [7, 8, 9,]];

let f = function(matrix){
    let rowCount = 0;
    for( let row = 0; row < matrix.length; row++){
        let count = 0;
        for (let cell = 0; cell < matrix[row].length; cell++){
            if( matrix[row][cell] < matrix[row].length)
            count++
        }
        if(count == 0)
        rowCount++;
    }
    console.log('rowCount', rowCount);
}
f(matrix);
