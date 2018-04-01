function truncateString (str, num) {
  // Clear out that junk in your trunk
  var newStr = ''
  if (num > 3 && num < str.length) {
    return newStr += str.slice(str[0], num - 3) + '...'
  } else if (num < str.length && num <= 3) {
    return newStr += str.slice(str[0], num) + '...'
  } else {
    return str
  }
}
truncateString('A-tisket a-tasket A green and yellow basket', 11)
