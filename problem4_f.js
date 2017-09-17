var max = -1
for (var i = 999; i > 100; i--) {
  for (var j = 999; j > 100; j--) {
    if (isPalindrome(i * j) && i * j > max) {
      max = i * j
      console.log(max)
    }
  }
}

function isPalindrome (number) {
  var str = number.toString()
  var reverse = str.split('').reverse().join('')
  return str === reverse
}
