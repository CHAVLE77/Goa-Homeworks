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