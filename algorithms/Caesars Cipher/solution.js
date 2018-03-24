function rot13 (str) { // LBH QVQ VG!
  var newStr = ''
  for (var i = 0; i < str.length; i++) {
    var x = str[i].charCodeAt()

    if (x < 65 || x > 90) {
      x = x
    } else if (x < 78) {
      x = x + 13
    } else {
      x = x - 13
    }
    newStr += String.fromCharCode(x)
  }
  return newStr
}

rot13('SERR PBQR PNZC')
