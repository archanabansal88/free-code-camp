function chunkArrayInGroups (arr, size) {
  var newArr = []
  for (var i = 0; i < arr.length; i += size) {
    var nwArr = arr.slice(i, i + size)
    newArr.push(nwArr)
  }

  return newArr
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
