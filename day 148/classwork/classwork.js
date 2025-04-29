function func(txt){
    let vowels = 'aeiou'
    let str1 = ''
    let str2 = ''
    for(let i =0;txt.length;i++){
        if(vowels.includes(txt[i])){
            str1+=txt[i]
            if(str1.length > str2.length){
                str2=str1
            }
        }else{
            str1 = ''
        }
    }
    return str2
}