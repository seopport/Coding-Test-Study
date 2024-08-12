function solution(n) {
    for(let i = 6; i<=100*n; i+= 6){
        if(i % 6 === 0 && i % n === 0) return i / 6;
    }
}