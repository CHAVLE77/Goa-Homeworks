function capitalize(str, indices) {
  let chars = str.split('');

  for (let i of indices) {
    if (i >= 0 && i < chars.length) {
      chars[i] = chars[i].toUpperCase();
    }
  }

  return chars.join('');
}