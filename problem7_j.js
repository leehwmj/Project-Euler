var primes = [2]
var number = 3

while (primes.length !== 10001) {
//   console.log(primes)
  if (isPrime(number)) {
    primes.push(number)
    // console.log(primes)
  }
  number += 2
//   console.log(number)
}
// console.log(primes)
console.log(primes.pop())

function isPrime (number) {
  for (var i = 0; i < primes.length; i++) {
    var prime = primes[i]
    if (number % prime === 0) {
      return false
    }
  }
  return true
}
