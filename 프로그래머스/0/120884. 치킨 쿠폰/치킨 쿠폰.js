function solution(chicken) {
    var answer = 0;
    let left = 0;
    while(chicken >= 10){
        answer += (Math.floor(chicken / 10));
        left += (chicken % 10);
        
        chicken = Math.floor(chicken /= 10);
        console.log(chicken, left)
        
    }
    
    if(left+1 >= 10) left += (left + 1)/10
    
    console.log(answer, left)
    
    return answer + Math.floor((left+1)/10);
    
}