// 500개 이상의 약수를 갖는 가장 작은 삼각수는?

// 1. n번째의 삼각수를 구하는 로직
// 2. 위에서 구해진 삼각수를 받아서 약수의 갯수를 확인하는 로직

// 약수의 갯수를 확인 하는 로직
function counter(number) {
    let counting = 0;
    for (let i = 1; i <= number; i++){
        if(number%i===0) {
            counting ++
        }
    }
    return counting
}

// n 번째 삼각수를 구하는 로직
// 1
// 1+2
// 1+2+3
// 1+2+3+4
// 1+2+3+4+5
let triangular = 0;
for (let i = 1; i <= 100; i++){
    triangular += i
}
// console.log(counter(triangular))


console.log(counter(5050))