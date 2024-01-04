function solution(n) {
    var answer = 0;
    n = 10
    //n 보다 작은 수를 n으로 나누어서 나머지가 1이나오면 중단
    for(let i = 1; i<=n; i++){
        if(n % i === 1){
            answer = i;
            return answer;
        }
    }
}

console.log(solution(10))