/* Consider an array of n decimal integers named elements. We want to rearrange elements according to the
following rules:
Sort the integers in ascending order by the number of 1's in their binary representations.
For example, 710 → 1112 and 810 → 10002, so 8 (which has single 1 in binary) would be ordered before 7
(which has triple 1's in binary).
Two or more integers having the same number of 1's in their binary representations are ordered by
increasing decimal value.
For example, 510 → 1012 and 610 → 1102 both contain double 1's in their binary representation,
so 5 would be ordered before 6 because it has the smaller decimal value.
Complete the rearrange function in the editor below. It has one parameter:
an array of n integers, elements. The function must sort the elements array according to the rules above and
return the sorted array.
*/

function generateBinary (n) {
  let count = 0
  let num = n
  while (num) {
    if (num & 1) {
      count++
    }
    num = num >> 1
  }
  return count
}

function Rearrange (elements) {
  return elements.sort((prev, next) => {
    const prevValue = generateBinary(prev)
    const nextValue = generateBinary(next)

    if (prevValue === nextValue) {
      return prev - next
    } else {
      return prevValue - nextValue
    }
  })
}

console.log(Rearrange([5, 3, 7, 10, 14]))
