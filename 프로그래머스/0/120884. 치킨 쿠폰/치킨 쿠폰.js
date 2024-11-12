function solution(chicken) {
    var answer = 0;
    let left = 0;
    
    while(chicken > 1){
        answer += Math.floor(chicken / 10);
        left += chicken % 10;
        chicken = chicken / 10;
    }
    
    answer += Math.floor(left/10);
  
    return answer;
}