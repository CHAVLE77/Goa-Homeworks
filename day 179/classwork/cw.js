//3
function sc(floor) {
  if (floor <= 1) return "";

  let scream = "Aa~ ".repeat(floor - 1) + "Pa!";
  if (floor <= 6) scream += " Aa!";
  
  return scream;
}
