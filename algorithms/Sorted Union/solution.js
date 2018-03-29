function uniteUnique (arr) {
  return (Array.from(arguments).reduce(function (a, b) {
    return a.concat(b)
  }, [])
    .filter(function (val, i, arr) {
      return arr.indexOf(val) === i
    })
  )
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
