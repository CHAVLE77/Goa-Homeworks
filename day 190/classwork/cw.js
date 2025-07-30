function missingWord(nums, str) {
  const cleanStr = str.replace(/ /g, '');
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= cleanStr.length) {
      return "No mission today";
    }
  }
  return nums.map(i => cleanStr[i]).join('').toLowerCase();
}
