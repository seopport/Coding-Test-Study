// 약수의 개수가 홀수인 경우는 제곱근이 정수이다.
function solution(left, right) {
    let answer = 0;
    for(let num = left; num <= right; num++){
        let isOdd = Number.isInteger(Math.sqrt(num));
        if(isOdd){
            answer -= num;
        }else {
            answer += num;
        }
    }
    return answer;
}

