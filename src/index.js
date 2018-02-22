module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {      
        let bi = ~~(row / 3) * 3;
        let bj = ~~(col / 3) * 3;

        let ready = []
        for (let i = 0; i<9; i++){
          ready.push(matrix[i][col])
          ready.push(matrix[row][i])
          ready.push(matrix[bi + i%3][bj + ~~(i/3)])
        }
        ready = ready.filter(num => num>0)
        let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(num => ready.indexOf(num) < 0);
        
        for (let i = 0; i < candidates.length; i++) {
          matrix[row][col] = candidates[i];
          let res = solveSudoku(matrix);
          if (res !== false) return res;
        }

        matrix[row][col] = 0;
        return false;
      }
    }
  }
  return matrix;
}
