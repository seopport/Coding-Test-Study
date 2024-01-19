//a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다..
function solution(n, m) {
    let answer = [];
    let 최대공약수 = [];
    let 최소공배수 = 0;
    let min = Math.min(m, n);
    let max = Math.max(n, m);
    
    for(let i = 1; i<=max; i++){
        if(max % i === 0 && min % i === 0){
            최대공약수.push(i);
        }
    }
    answer.push(Math.max(...최대공약수))
    최소공배수 = (n * m) / Math.max(...최대공약수)
    answer.push(최소공배수)
    
    return answer;
}