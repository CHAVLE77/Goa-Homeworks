function change(string){
  string = string.toLowerCase()
  let result = ''

  for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(97 + i)
    result += string.includes(letter) ? '1' : '0'
  }

  return result
}