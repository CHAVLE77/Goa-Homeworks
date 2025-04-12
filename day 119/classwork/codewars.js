//1
function multiTable(number) {
    let result = ''
    for(let i = 1;10 >= i;i++){
      result += `${i} * ${number} = ${i * number}\n`
    }
    return result.trim()
  }

  //2
  function isFlush(cards) {
    let check = cards[0].slice(-1)
      for(let i = 0;i<cards.length;i++){
        if(cards[i].slice(-1) !== check)
          return false
    }
    return true
  }