function solution(n) {
    var answer = [];
    str_n = String(n);
    
    for(let i = str_n.length-1; i>=0; i--){
        answer.push(str_n[i]*1);
    }
    
    return answer;
}