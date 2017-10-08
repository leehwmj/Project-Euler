// 500개 이상의 약수를 갖는 가장 작은 삼각수는?

// 1. n번째의 삼각수를 구하는 로직
// 2. 위에서 구해진 삼각수를 받아서 약수의 갯수를 확인하는 로직

// 약수의 갯수를 확인 하는 로직
function counter(number) {
    let counting = 0;
    for (let i = 1; i <= Math.sqrt(number); i++){
        if(number%i===0) {
            counting ++
        }
    }
    return counting*2
}

// n 번째 삼각수를 구하는 로직
// 1 = 1
// 1+2 = 3
// 1+2+3 = 6
// 1+2+3+4 = 10
// 1+2+3+4+5 = 15
// 1+2+3+4+5+6 = 21
// 1+2+3+4+5+6+7 = 28
function triangular(n) {
    let tri = 0;
    if (n%2 === 0){
        tri = (1+n)*(n/2)
    } else {
        tri = ((1+n)/2)*n
    }
    // for (let i = 1; i <= n; i++){
    //     tri += i
    // }
    return tri
}

// 500개 이상의 약수를 갖는 가장 작은 삼각수
// 먼저
// 1. 삼각수를 구하고
// 2. 1에서 구한 삼각수의 약수 갯수를 구하고
// 3. 2에서 구한 갯수가 500개보다 작으면 다시 1로 돌아간다.

let div = 0;
let result;
for (let i = 1; div<500; i++) {
    result = triangular(i);
    // console.log(result)
    div = counter(result);
}
console.log(result)

// console.log(counter(triangular))
// console.log(triangular(100))

// console.log(counter(15691060000))