function sym () {
  var args = []
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  function symDiff (array1, array2) {
    var result = []
    array1.forEach(function (item) {
      if (array2.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item)
      }
    })
    array2.forEach(function (item) {
      if (array1.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item)
      }
    })
    return result
  }
  return args.reduce(symDiff)
}

sym([1, 2, 3], [5, 2, 1, 4])
