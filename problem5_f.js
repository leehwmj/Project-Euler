// 1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.

// 그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?

function check (number) {
  if (number % 2 === 0 && number % 3 === 0 && number % 4 === 0 &&
        number % 5 === 0 && number % 6 === 0 && number % 7 === 0 &&
        number % 8 === 0 && number % 9 === 0 && number % 10 === 0 &&
        number % 11 === 0 && number % 12 === 0 && number % 13 === 0 &&
        number % 14 === 0 && number % 15 === 0 && number % 16 === 0 &&
        number % 17 === 0 && number % 18 === 0 && number % 19 === 0 &&
        number % 20 === 0) {
    return true
  } else {
    return false
  }
}

var start = 0

while (start === 0 || !check(start)) {
  start = start + 20
}

console.log(start)
