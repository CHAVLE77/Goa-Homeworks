function findSmallestMissingInteger(matrix) {
    let set = new Set();
  
    matrix.forEach(row => row.forEach(num => set.add(num)));
  
    let missing = 0;
    while (set.has(missing)) {
      missing++;
    }
  
    return missing;
  }
  
  const matrix = [[0, 2], [5, 1]];
  console.log(findSmallestMissingInteger(matrix));
  