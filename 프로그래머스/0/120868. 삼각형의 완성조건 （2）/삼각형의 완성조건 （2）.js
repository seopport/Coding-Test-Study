function solution(sides) {
    // 가장 긴 변의 길이 < 다른 두 변의 길이의 합
    let answer = [];
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    for(let i = 0; i <= max; i++){
        if(i + min > max) answer.push(i);
    }
    
    for(let i = max + 1; i < max + min; i++){
        if(i < max + min) answer.push(i);
    }
    
    return answer.length;
}