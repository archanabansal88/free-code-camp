function sumPrimes (num) {
  if (num === 1) {
    return 0
  }
  function isPrime (number) {
    for (var i = 2; i <= num; i++) {
      if (num % i === 0 && num !== i) {
        return false
      }
    }
    return true
  }
  if (isPrime(num) === false) {
    return sumPrimes(num - 1)
  }
  if (isPrime(num) === true) {
    return num + sumPrimes(num - 1)
  }
}

sumPrimes(10)
