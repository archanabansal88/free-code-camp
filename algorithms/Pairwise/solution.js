function pairwise (arr, arg) {
  var sum = 0
  arr.forEach(function (ele, index) {
    var searchValue = arg - ele

    if (arr.indexOf(searchValue) > -1 && arr.indexOf(searchValue) !== index) {
      sum += arr.indexOf(searchValue) + index
      delete arr[index]
      delete arr[arr.indexOf(searchValue)]
    }
  })
  return sum
}

pairwise([1, 4, 2, 3, 0, 5], 7)
