function solution(s) {
    var answer = [];
    
    for(let i = 0; i < s.length; i++){
        const lastIndex = s.lastIndexOf(s[i], i - 1);
        if(lastIndex !== -1){
            answer[i] = i - lastIndex;
        }else{
            answer[i] = -1;
        }
        answer[0] = -1;
    }
    
    return answer;
}