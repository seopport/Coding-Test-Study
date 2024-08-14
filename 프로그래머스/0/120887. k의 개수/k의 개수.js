function solution(i, j, k) {
    let answer = 0;
    const start = i;
    const end = j;
    const target = k;
    
    for(let i = start; i <= end; i++){
        const tempArr = i.toString().split('').filter((item) => item == target)
        answer += tempArr.length
    }
    
    return answer;
}