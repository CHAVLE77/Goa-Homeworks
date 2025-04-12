//1
function whatday(num) { 
    switch (num){
        case 1:
        return "Sunday"
        case 2:
        return "Monday"
        case 3:
        return "Tuesday"
        case 4:
        return "Wednesday"
        case 5:
        return "Thursday"
        case 6:
        return "Friday"
        case 7:
        return "Saturday"
    }
    return "Wrong, please enter a number between 1 and 7"
  
  }
//2
  function stringClean(s) {
    return s.replace(/[0-9]/g, '');
}

//3
  function nicknameGenerator(name){
    let vowels = ['a','e','i','o','u']
    if(name.length < 4){
      return 'Error: Name too short'
    }
    let three = name.slice(2,3)
    if(vowels.includes(three)){
      return name.slice(0,4)
    }
    return name.slice(0,3)
  }

//4
    s = s.replace('o', 'u')
    s = s.replace('a', 'o')
    return s