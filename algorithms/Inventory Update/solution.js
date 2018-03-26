function updateInventory (arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var flag = 0
  arr2.map(function (item1) {
    flag = 0
    arr1.map(function (item2) {
      if (item1[1] === item2[1]) {
        item2[0] += item1[0]
        flag = 1
      }
    })
    if (flag === 0) {
      arr1.push(item1)
    }
  })
  return arr1.sort(function (a, b) {
    return a[1] > b[1] ? 1 : -1
  })
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

updateInventory(curInv, newInv)
