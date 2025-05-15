//1
function findUniq(arr) {
  arr.sort((a, b) => a - b); 
  
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  
  return arr[arr.length - 1];
}

//2
function findOutlier(integers){
    let odd = []
    let even = []
  for(let i of integers){
      if(i % 2 === 0){
          even.push(i)
      }else {
          odd.push(i)
      }
  }
        if(odd.length === 1){
          return odd[0]
      }else if(even.length === 1){
        return even[0]
      }
}
