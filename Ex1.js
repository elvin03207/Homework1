function is_square_Matrix(matrix) {
    let rows = matrix.length;
    
    for (let row = 0; row < matrix.length; row++)
      {
       
    cells = matrix[row].length;
    if(rows != cells)
      {
       
       return false;
      }
      }
      
      return true;
    }
    console.log(is_square_Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))