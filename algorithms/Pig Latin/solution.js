function translatePigLatin (str) {
  var firstVowel = str.search(/[aeiou]/)
  return firstVowel === 0 ? str + 'way' : str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay'
}

translatePigLatin('consonant')
