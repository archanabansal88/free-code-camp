function repeatStringNumTimes (str, num) {
  // repeat after me

  var nwStr = ''
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      nwStr += str
    }
    return nwStr
  } else {
    return ''
  }
}

repeatStringNumTimes('abc', 3)
