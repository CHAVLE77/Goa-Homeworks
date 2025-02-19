// 1
var number=function(array){
  let result = []
  for(let i = 0;i<array.length;i++){
    let check = `${i + 1}: ${array[i]}`
    result.push(check)
  }
  return result
}

// 2
function bonusTime(salary, bonus) {
    return bonus === true ? '£' + salary * 10 : `£${salary}`;
  }

// 3
function minMax(arr){
    let min = arr[0]
    let max = arr[0]
     for(let i = 0;i<arr.length;i++){
       if(arr[i] < min){
         min = arr[i]
       }
       if(arr[i] > max){
         max = arr[i]
       }
     }
    return [min,max]
  }

// 4
function sumMix(x){
    let result = 0
    for(let i of x){
      result += Number(i)
    }
    return result
  }