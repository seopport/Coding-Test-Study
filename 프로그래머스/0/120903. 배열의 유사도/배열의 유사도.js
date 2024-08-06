function solution(s1, s2) {
    let answer = 0;
    for(let i = 0; i < Math.max(s1.length, s2.length); i++){
        for(let j = 0; j < Math.min(s1.length, s2.length); j++){
            console.log(s2[i], s1[j])
            if(s2[i] === s1[j]) answer++;
        }
    }
    
    return answer;
}