//1
function checkNum(num){
    if(num % 2 === 0) {
        return 'even'
    }
    return 'odd'
}
console.log(checkNum(8))

//2
function checkAge(age){
    if(age>=18){
        return 'adult'
    }
    return 'child'
}
console.log(checkAge(18))

//3
function checkString(str){
    if(!str.trim()){
        return 'empty'
    }
    return 'not empty'
}
console.log(checkString('a'))

//4
function checkNums(num1,num2){
    return Math.max(num1,num2)
}
console.log(checkNums(10,14))

//5
function checkPassword(pass){
    if(pass.length>=8){
        return 'strong password✅'
    }
    return 'weak password❌'
}
console.log(checkPassword('adasdsada'))