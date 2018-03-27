function fearNotLetter (str) {
  var start = str.charCodeAt(0)

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i)

    if (code !== start + i) {
      return String.fromCharCode(code - 1)
    }
  }
  return undefined
}

fearNotLetter('abce')
