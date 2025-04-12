function elimination(arr){
  let res = []
  for(let i = 0;i<arr.length;i++){
    for(let j = i+1;j<arr.length ;j++){
      if(arr[i] === arr[j]){
        return arr[i]
      }
    }
  }
  return null
}


function elevatorDistance(array) {
    let count = 0
    let  b = 0
  for(let i = 0;i<array.length - 1;i++){
      if(array[i] > array[i + 1]){
          count+=array[i] - array[i+1]
      }else{
          b += array[i + 1] - array[i] 
      }
  }
  return count + b
}


function replace(s) {
    return s.replace(/[aeiouAEIOU]/g,'!')
}

//python
// def count_char_occurrences(strng, char):
//     count = 0
//     for i in strng:
//         if i == char:
//             count+=1
//     return count




function oddCount(n) {
    return Math.floor((n - 1) / 2);
  }

  
  function typeValidation(variable, type) {
    return typeof variable === type;
  }