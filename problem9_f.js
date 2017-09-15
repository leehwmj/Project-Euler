/*
세 자연수 a, b, c 가 피타고라스 정리 a^2 + b^2 = c^2 를 만족하면 피타고라스 수라고 부릅니다 (여기서 a < b < c ).
예를 들면 3^2 + 4^2 = 9 + 16 = 25 = 5^2이므로 3, 4, 5는 피타고라스 수입니다.

a + b + c = 1000 인 피타고라스 수 a, b, c는 한 가지 뿐입니다. 이 때, a × b × c 는 얼마입니까?*/

for (var a = 1; a < 1000; a++){
    for(var b = 1; b < 1000; b++){
        for(var c = 1; c < 1000; c++){
            if(a+b+c === 1000 && isPythagorean(a, b, c) && a<b && b<c){
                console.log(a*b*c)
            }
        }
    }
}

function isPythagorean(a, b, c){
    return a*a + b*b === c*c
}