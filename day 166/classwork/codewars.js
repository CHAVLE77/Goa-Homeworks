//1
function switchItUp(number){
  switch(number){
      case 0: return "Zero";
      case 1: return "One";
      case 2: return "Two";
      case 3: return "Three";
      case 4: return "Four";
      case 5: return "Five";
      case 6: return "Six";
      case 7: return "Seven";
      case 8: return "Eight";
      case 9: return "Nine";
  }
}

//2
def to_alternating_case(string):
    result = ''
    for i in string:
        if i.isupper():
            result += i.lower()  
        elif i.islower():
            result += i.upper() 
        else:
            result += i  
    return result