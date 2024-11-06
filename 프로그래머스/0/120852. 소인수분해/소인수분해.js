function solution(n) {
    //소수 구하기
    let answer = [];
    let i = 2;
    
    while(i <= n){
        if(n % i === 0){
            answer.push(i);
            n /= i;
        }else i++;
    }
    
    return [...new Set(answer)];
}