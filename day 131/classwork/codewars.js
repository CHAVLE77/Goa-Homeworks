function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
      let spaces = " ".repeat(nFloors - i - 1);
      let stars = "*".repeat(2 * i + 1);
      tower.push(spaces + stars + spaces);
    }
    return tower;
  }
  
  console.log(towerBuilder(2));
  