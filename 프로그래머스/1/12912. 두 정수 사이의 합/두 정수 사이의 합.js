function solution(a, b) {
    var answer = 0;
    let sum = 0;

    for (let i = Math.min(a, b); i<=Math.max(a, b); i++){
        sum += i;
    }
    answer = sum;
    
    return answer;
} 

/* 
if(a<=b){
        for(let i = a; i<=b; i++){
            sum += i;
        }
    }else if(a>=b){
        for(let i = b; i<=a; i++){
            sum += i;
        }
    }
    answer = sum;
*/