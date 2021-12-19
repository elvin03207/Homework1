function isPrime(num) {
    flag = true;
    for (let row = 2; row <= num - 1; row++) {
        if (num % row == 0) {
            flag = false;
            break;
        }
    }
        if (flag == true)
        return true;
        else
        return false;
}


function sumOfPrimes(matrix) {
    let sum = 0;
    for(let row = 0; row < matrix.length; row++) {
        for(let cell = 0; cell<matrix.length; cell++) {
            if (isPrime(matrix[row][cell]) == true)
            sum += matrix[row][cell];
        }
    }
    return sum;
}
console.log(sumOfPrimes( [ [5, 6, 7], [8, 9, 10], [11, 12, 13] ]));