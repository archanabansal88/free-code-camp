function orbitalPeriod (arr) {
  var GM = 398600.4418
  var earthRadius = 6367.4447
  for (var key in arr) {
    var orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[key].avgAlt + earthRadius, 3) / GM))
    delete arr[key].avgAlt
    arr[key].orbitalPeriod = orbitalPeriod
  }
  return arr
}

orbitalPeriod([{name: 'sputnik', avgAlt: 35873.5553}])
