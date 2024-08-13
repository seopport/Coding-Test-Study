function solution(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    let count = 1;
    for(let i = 1; i<=n; i++){
        count *= i;
        if( count > n ) return i - 1;
    } 
}