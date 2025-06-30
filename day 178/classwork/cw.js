//1
function descendingOrder(n){
    let res =  n.toString().split('').map(Number).sort((a,b) =>b-a)
    let res2 = res.join('')
    return Number(res2)
}
