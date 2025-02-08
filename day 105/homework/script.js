function points(games) {
    let point = 0
  for (let i = 0;i<games.length;i++){
    let x = games[i][0]
    let y = games[i][2]
    if(x > y){
        point+=3
    }
    else if(x === y){
        point += 1
    }
  }
  return point
}