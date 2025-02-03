function func(str){
    let count = 0
    let first = str[0]
    for(let i = 0;i<str.length;i++){
        if(str[i] === first){
            count++
        }
    }
    console.log(count)
}

func('hellho')