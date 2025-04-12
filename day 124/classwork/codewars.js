//1
function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
  }

//3
function updateLight(current) {
    switch(current){
        case 'green':
        return 'yellow'
        case 'yellow':
        return 'red'
        case 'red':
        return 'green'
    }
  }