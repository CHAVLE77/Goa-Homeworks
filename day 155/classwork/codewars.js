function validCard(card){
  card = card.split(' ').join('').split('').reverse()
  let res = ''
  let count = 0
  
    for(let i =0;i<card.length;i++){
        let digit = Number(card[i])
        if((i + 1) % 2 === 0){
            digit *= 2
        }
        if(digit>9){
            digit -=9
        }
        count+=digit
    }
    return count % 10 ===0
}

//2
def two_oldest_ages(ages):
    result = []
    max1 = max(ages)
    ages.remove(max1)
    max2 = max(ages)
    result.append(max2)
    result.append(max1)
    return result


//3
function halvingSum(n) {
  let sum = 0
  while(n>0){
    sum += n
    n = Math.floor(n / 2)
  }
  return sum
}
