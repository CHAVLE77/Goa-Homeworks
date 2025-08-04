//2
function spinWords(string){
    let splited = string.split(' ');
    let first = '';
    for(let i = 0; i < splited.length; i++){
        if(splited[i].length >= 5){
            first += splited[i].split('').reverse().join('') + ' ';
        }else{
            first += splited[i] + ' '
        }
    }
    return first.trim()
}
