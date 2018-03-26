function findLongestWord (str) {
  var word = str.split(' ')
  var maxlength = 0

  for (var i = 0; i < word.length; i++) {
    if (word[i].length > maxlength) {
      maxlength = word[i].length
    }
  }
  return maxlength
}

findLongestWord('The quick brown fox jumped over the lazy dog')
