function solution(n) {
    var answer = 0;
    //for문을 돌면서 자신보다 작은 수(자신포함)로 나누었을 때 나머지가 0이면 약수
    for(let i = 1; i<= n; i++) {
        if(n % i === 0){
            answer += i //나머지가 0인 약수를 모두 더하기
        }
    }
    return answer;
}

console.log(solution(123));