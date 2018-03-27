function swap (arr, index1, index2) {
  var temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
  return arr
}

function checkRepeats (str) {
  var exp = /(\w)\1+/g
  return exp.test(str)
}

function permute (arr, startIndex, endIndex, result) {
  if (startIndex === endIndex) {
    if (!checkRepeats(arr.join(''))) {
      result.push(arr)
    }
  } else {
    var i
    for (i = startIndex; i <= endIndex; i++) {
      swap(arr, startIndex, i)
      permute(arr, startIndex + 1, endIndex, result)
      swap(arr, i, startIndex)
    }
  }
  return result.length
}
function permAlone (str) {
  var arr = str.split('')
  var result = []
  return permute(arr, 0, arr.length - 1, result)
}
permAlone('aab')
