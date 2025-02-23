let arr = []
for(let i=0;i<3;i++){
    arr[i]=[]
    let count = 0
    let result = 0
    for(let j=0;j<3;j++){
        arr[i][j]=Number(prompt(`enter number: `))
        result += arr[i][j] 
        count++
    }
            let avarage = result / count
            console.log(avarage)
}


