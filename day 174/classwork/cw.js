function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const remainingBlue = blueStart - bluePulled;
  const remainingRed = redStart - redPulled;
  const totalRemaining = remainingBlue + remainingRed;
  return remainingBlue / totalRemaining;
}
