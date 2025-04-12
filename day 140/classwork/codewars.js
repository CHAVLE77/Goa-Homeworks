//1
var a = "code";
var b = "wa.rs";
var name = a + b;

//2
const sequenceSum = (begin, end, step) => {
    if(begin > end){
      return 0
    }
    
    let sum = 0
    
    for(let i = begin;i<=end;i+=step){
      sum +=i
    }
    return sum
    
  };

  //3
  function solution(a, b){
    return a.length > b.length ? b + a + b:a+b + a
  }