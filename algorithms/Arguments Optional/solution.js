function addTogether () {
  var a = arguments[0]
  var b = arguments[1]
  if (arguments.length > 1 && arguments.length <= 2) {
    if ((typeof (a) && typeof (b)) === 'number') {
      return a + b
    } else {
      return undefined
    }
  } else if (arguments.length === 1 && (typeof (a) === 'number')) {
    return function (c) {
      if ((typeof (c) === 'number')) {
        return a + c
      } else {
        return undefined
      }
    }
  }
}

addTogether(2, 3)
