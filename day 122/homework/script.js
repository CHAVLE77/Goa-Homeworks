function bouncingBall(h,  bounce,  window) {
  let count = 0
  if(h<=0|| bounce >=1 || bounce <=0 || window >=h){
    return -1
  }
  while(h > window){
    count++
     h *= bounce
 if(h > window){
    count++
  }
  }
  return count
}