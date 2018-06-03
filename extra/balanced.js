/* Given an array of strings..strings contains '>' and '<'It should be balanced
Example balanced-- '<<>>' '<><><>'
Example Unbalanced-- '><>>' '<>>>'

given an array of strings and array of integers, if the string is unbalanced then depending on the integer given
on same index in maxReplacements as of string in array we can replace '>' with '<>'

after replacement if string would be balanced then it should return 1 else 0 for unbalanced

*/
function isBalanced (expression, maxReplacement) {
  let count = 0
  if (expression.endsWith('<')) {
    return 0
  }
  while (expression) {
    if (expression.startsWith('<')) {
      count++
    } else {
      count--
      if (count < 0) {
        maxReplacement--
      }
    }

    if (count < 0 && maxReplacement < 0) {
      break
    }
    expression = expression.slice(1)
  }

  return expression ? 0 : 1
}

function BalancedOrNot (expressions, maxReplacements) {
  if (expressions.length !== maxReplacements.length) {
    return 'invalid arguments'
  }
  return expressions.map((value, index) => isBalanced(value, maxReplacements[index]))
}

BalancedOrNot(['<>>>', '<>>>>'], [2, 1])
