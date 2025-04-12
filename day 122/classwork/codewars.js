//1
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

//2
var number = function(array) {
    let result = []
  for (let i = 0; i < array.length; i++) {
    let check = `${i+1}: ${array[i]}`
    result.push(check)
  }
  return result
}

//3
function bonusTime(salary, bonus) {
    return bonus === true ? '£' + salary * 10 : `£${salary}`;
  }

//4
function maskify(cc) {
    let result = ''
    for(let i = 0;i<cc.length;i++){
      if(i < cc.length-4){
        result += '#'
      }else{
        result += cc[i]
      }
    }
    return result
  }

//5
function doubleChar(str) {
    let result = ''
    for(let i = 0;i<str.length;i++){
      result+=str[i] + str[i]
    }
    return result
  }