function solution(n) {
    let count = 1;
    for(let i = 1; i<=n; i++){
        count *= i;
        if( count > n ) return i - 1;
        if( count === n ) return i;
    } 
}