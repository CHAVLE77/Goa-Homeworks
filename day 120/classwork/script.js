//1
function unionOfSets(setsArray) {
    return new Set(setsArray.flatMap(set => [...set]));
  }

  //2
  function symmetricDifference(set1, set2) {
    const result = new Set();
  
    for (let val of set1) {
      if (!set2.has(val)) result.add(val);
    }
  
    for (let val of set2) {
      if (!set1.has(val)) result.add(val);
    }
  
    return result;
  }

  //3
  function characterFrequency(str) {
    const map = new Map();
  
    for (let char of str) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  
    return map;
  }
  