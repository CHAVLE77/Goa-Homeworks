//1
function anyArrows(arrows) {
  return arrows.some(arrow => !arrow.damaged);
}

//2
function playerRankUp(points) {
  if (points >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  } else {
    return false;
  }
}
