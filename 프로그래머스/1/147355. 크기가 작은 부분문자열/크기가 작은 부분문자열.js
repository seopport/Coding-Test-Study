function solution(t, p) {
    var answer = 0;
    // i번째 부터 i+2번째까지 담고
    // 그게 p보다 작으면 count + 1
    for(let i = 0; i<=t.length-p.length; i++){
        tempT = t.substr(i, p.length);
        if(tempT * 1 <= p){
            answer += 1;
        }
    }
    return answer;
}