function getSize(width, height, depth) {
    let arr = []
    let calcArea = 2 * ((depth * width) + (depth * height) + (width * height))
    let volume = depth * width * height
    arr.push(calcArea)
    arr.push(volume)
    return arr
  }