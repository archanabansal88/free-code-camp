function pairElement (str) {
  var pair = {A: 'T', T: 'A', C: 'G', G: 'C'}
  var newArr = str.split('')
  for (var i = 0; i < newArr.length; i++) {
    newArr[i] = [newArr[i], pair[newArr[i]]]
  }
  return newArr
}

pairElement('GCG')
