function rowWeights(weights) {
    let team1 = 0;
    let team2 = 0;
  
    weights.forEach((weight, index) => {
      if (index % 2 === 0) {
        team1 += weight;
      } else {
        team2 += weight;
      }
    });
  
    return [team1, team2];
  }

  
  function removeSmallest(numbers) {
    if (numbers.length === 0) return [];

    const minVal = Math.min(...numbers);
    const index = numbers.indexOf(minVal);

    return [
        ...numbers.slice(0, index),
        ...numbers.slice(index + 1)
    ];
}