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
        
        // console.log("타겟 문자 :",s[i], "현재 문자를 제외하고 마지막으로 나타난 같은 문자의 인덱스 :", 
        //             lastIndex, "현재 인덱스 (i) :", i);
    }
    
    return answer;
}