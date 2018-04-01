function whatIsInAName (collection, source) {
  var sourceKeys = Object.keys(source)
  return collection.filter(function (ele) {
    return sourceKeys.every(function (key) {
      return ele.hasOwnProperty(key) && ele[key] === source[key]
    })
  })
}

whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' })
