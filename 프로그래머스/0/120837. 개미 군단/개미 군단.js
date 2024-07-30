function solution(hp) {
    let answer = 0;
    //5, 3, 1
    
    if(hp % 5 === 0) {
        answer = hp / 5;
    }
    
    else if(hp % 5 % 3 === 0) {
        answer = Math.floor(hp / 5) + hp % 5 / 3
    }
    
    else {
        answer = hp % 5 >= 3 ?  Math.floor(hp / 5) + hp % 5 - 2 : Math.floor(hp / 5) + hp % 5

    }
    
        
    return answer;
}