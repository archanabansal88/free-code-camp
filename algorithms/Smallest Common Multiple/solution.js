function smallestCommons (arr) {
  arr.sort(function (a, b) {
    return b - a
  })
  var newArr = []
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i)
  }

  var common = 0
  var loop = 1
  var n = 1

  while (n !== newArr.length) {
    common = newArr[0] * loop * newArr[1]
    for (n = 2; n < newArr.length; n++) {
      if (common % newArr[n] !== 0) {
        break
      }
    }
    loop++
  }
  return common
}

smallestCommons([23, 18])
