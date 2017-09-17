var prime = (function sieve (max) {
  var num = 3
  var composite = {}
  var prime = [2]

  while (num < max) {
    if (composite[num]) {
      num += 2
      continue
    }
    prime.push(num)

    var next = num + num
    while (next < max) {
      composite[next] = true
      next += num
    }
    num += 2
  }
  return prime
})(2000000)

var sum = 0

for (let value of prime) {
  sum += value
}
console.log(sum)
