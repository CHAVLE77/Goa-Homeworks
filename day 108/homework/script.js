//2
let input = prompt('enter number: ')
let result = []
for(let i = 0;i<input;i++){
    let ask = prompt(`enter number: `)
    result.push(ask)
    let sorted = result.sort((a,b) => b-a)
    console.log(sorted)
}
