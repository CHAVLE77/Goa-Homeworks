function dollarsToLaris(dollars, rate) {
  return dollars.map(d => d * rate);
}

function getPalindromes(words) {
  return words.filter(word => word === word.split('').reverse().join(''));
}

function maskCards(cards) {
  return cards.map(card => '*'.repeat(card.length - 4) + card.slice(-4));
}


function toObj(matrix) {
  return Object.fromEntries(matrix);
}
