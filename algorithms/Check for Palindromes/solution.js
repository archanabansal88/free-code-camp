function palindrome (str) {
  str = str.replace(/[\W_]/g, '').toLowerCase()
  var old = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')
  if (old === str) {
    return true
  } else {
    return false
  }
}

palindrome('eye')
