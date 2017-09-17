/*
10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.

이백만(2,000,000) 이하 소수의 합은 얼마입니까?
*/

let sum = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;
let sum6 = 0;
let sum7 = 0;
let sum8 = 0;
let sum9 = 0;
let sum10 = 0;

for (let i = 2; i <= 200000; i++) {
  if (isPrime(i)) {
    sum = sum + i;
    // console.log(i)
  }
}

console.log(sum);

for (let j = 200000; j <= 400000; j++) {
  if (isPrime(j)) {
    sum2 = sum2 + j;
    // console.log(i)
  }
}

console.log(sum2);

for (let k = 400000; k <= 600000; k++) {
  if (isPrime(k)) {
    sum3 = sum3 + k;
    // console.log(i)
  }
}

console.log(sum3);

for (let l = 600000; l <= 800000; l++) {
  if (isPrime(l)) {
    sum4 = sum4 + l;
    // console.log(i)
  }
}

console.log(sum4);

for (let m = 800000; m <= 1000000; m++) {
  if (isPrime(m)) {
    sum5 = sum5 + m;
    // console.log(i)
  }
}

console.log(sum5);

for (let n = 1000000; n <= 1200000; n++) {
  if (isPrime(n)) {
    sum6 = sum6 + n;
    // console.log(i)
  }
}

console.log(sum6);

for (let o = 1200000; o <= 1400000; o++) {
  if (isPrime(o)) {
    sum7 = sum7 + o;
    // console.log(i)
  }
}

console.log(sum7);

for (let p = 1400000; p <= 1600000; p++) {
  if (isPrime(p)) {
    sum8 = sum8 + p;
    // console.log(i)
  }
}

console.log(sum8);

for (let q = 1600000; q <= 1800000; q++) {
  if (isPrime(q)) {
    sum9 = sum9 + q;
    // console.log(i)
  }
}

console.log(sum9);

for (let r = 1800000; r <= 2000000; r++) {
  if (isPrime(r)) {
    sum10 = sum10 + r;
    // console.log(i)
  }
}

console.log(sum10);

console.log(sum + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8 + sum9 + sum10);

function isPrime(number) {
  if (number === 2 || number === 1) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// console.log(isPrime(9))
// console.log(isPrime(10))
// console.log('--------')
// console.log(isPrime(9))
