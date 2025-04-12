function progressiveConcat(str) {
    let result = '';
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      result += str[left] + str[right] + (left + 1);
      left++;
      right--;
    }
  
    return result;
  }
  
  console.log(progressiveConcat("abcdef")); 

  
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
  
  