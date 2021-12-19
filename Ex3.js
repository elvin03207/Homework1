function matrixSnake(snake){
    let matrix = [];
    let row = 0;
    while (row < snake){
        matrix.push([]);
        row++;
    }
    let up = true;
    let measure = 0;
    let cell = 0;
    while (cell < snake){
        if (up){
    
    
            up = false;
            row = 0;
            while (row < snake){
    
    
                matrix[row].push(snake**2-measure);
                row++;
                measure++;
            }
        }
        else{
    
            up = true;
            row = snake-1;
            while (row >= 0){
    
                matrix[row].push(snake**2-measure);
    
                row--;
                measure++;
            }
    
        }
    
    
        cell++;
    }
        return matrix;
    }
    
    console.log(matrixSnake(5));