/*
10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.

이백만(2,000,000) 이하 소수의 합은 얼마입니까?
*/

var sum = 0
var sum2 = 0
var sum3 = 0
var sum4 = 0
var sum5 = 0
var sum6 = 0
var sum7 = 0
var sum8 = 0
var sum9 = 0
var sum10 = 0

for (var i = 2; i <= 200000; i++) {
  if (isPrime(i)) {
    sum = sum + i
    // console.log(i)
  }
}

console.log(sum)

for (var j = 200000; j <= 400000; j++) {
  if (isPrime(j)) {
    sum2 = sum2 + j
    // console.log(i)
  }
}

console.log(sum2)

for (var k = 400000; k <= 600000; k++) {
  if (isPrime(k)) {
    sum3 = sum3 + k
    // console.log(i)
  }
}

console.log(sum3)

for (var l = 600000; l <= 800000; l++) {
  if (isPrime(l)) {
    sum4 = sum4 + l
    // console.log(i)
  }
}

console.log(sum4)

for (var m = 800000; m <= 1000000; m++) {
  if (isPrime(m)) {
    sum5 = sum5 + m
    // console.log(i)
  }
}

console.log(sum5)

for (var n = 1000000; n <= 1200000; n++) {
  if (isPrime(n)) {
    sum6 = sum6 + n
    // console.log(i)
  }
}

console.log(sum6)

for (var o = 1200000; o <= 1400000; o++) {
  if (isPrime(o)) {
    sum7 = sum7 + o
    // console.log(i)
  }
}

console.log(sum7)

for (var p = 1400000; p <= 1600000; p++) {
  if (isPrime(p)) {
    sum8 = sum8 + p
    // console.log(i)
  }
}

console.log(sum8)

for (var q = 1600000; q <= 1800000; q++) {
  if (isPrime(q)) {
    sum9 = sum9 + q
    // console.log(i)
  }
}

console.log(sum9)

for (var r = 1800000; r <= 2000000; r++) {
  if (isPrime(r)) {
    sum10 = sum10 + r
    // console.log(i)
  }
}

console.log(sum10)

console.log(sum + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8 + sum9 + sum10)

function isPrime (number) {
  if (number === 2 || number === 1) {
    return true
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }
}

// console.log(isPrime(9))
// console.log(isPrime(10))
// console.log('--------')
// console.log(isPrime(9))
