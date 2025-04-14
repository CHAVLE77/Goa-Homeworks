//1
function findDifference(a, b) {
    let aV = 1
    let bV = 1
    for(let i =0;i<a.length;i++){
      aV*=a[i]
    }
    for(let n = 0;n<b.length;n++){
      bV *= b[n]
    }
    let res =  aV - bV
    if(res < 0){
      res = -res
    }
    return res
  }

  //2
  function sayHello(name) {
    return `Hello, ${name}`
  }

  //3
  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

  //4
  function howMuchILoveYou(nbPetals) {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
      ];
      
      return phrases[(nbPetals - 1) % phrases.length]
    }

  //6
  function oddCount(n){
    let count = 0
    for(let i =0;i<n;i++){
      if(i % 2 !== 0){
        count++
      }
    }
    return count
  }

  //7
  function between(a, b) {
    let res = []
    for(let i = a;i<=b;i++){
      res.push(i)
    }
    return res
  }
  