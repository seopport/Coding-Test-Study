function solution(n) {
    let answer = [];
    for(let i = 4; i<=n; i++){ 
        for(let j = 2; j<=i-1; j++){ 
            if(i % j === 0) answer.push(i);
        }
    }
    return [...new Set(answer)].length
}