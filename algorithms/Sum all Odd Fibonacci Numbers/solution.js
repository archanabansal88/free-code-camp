function sumFibs (num) {
  var sum = 0
  var currNumber = 1
  var prevNumber = 0
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      sum += currNumber
    }
    currNumber += prevNumber
    prevNumber = currNumber - prevNumber
  }
  return sum
}

sumFibs(4)
