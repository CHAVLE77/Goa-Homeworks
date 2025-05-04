function isVow(arr) {
    const vowelCodes = {
      97: 'a',  
      101: 'e', 
      105: 'i', 
      111: 'o', 
      117: 'u'  
    };
  
    return arr.map(num => vowelCodes[num] || num);
  }

  //2
  function billboard(name, price = 30) {
    let length = name.length;
    let cost = 0;
  
    for (let i = 0; i < length; i++) {
      cost += price;
    }
  
    return cost;
  }

  //3
  function whoIsPaying(name) {
    if (name.length <= 2) {
      return [name];
    } else {
      return [name, name.slice(0, 2)];
    }
  }