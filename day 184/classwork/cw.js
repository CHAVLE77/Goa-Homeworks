//2
function closeCompare(a, b, margin = 0) {
  if (Math.abs(a - b) <= margin) {
    return 0
  }
  return a < b ? -1 : 1
}


//3
function Hero(name = 'Hero') {
  this.name = name;
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}
