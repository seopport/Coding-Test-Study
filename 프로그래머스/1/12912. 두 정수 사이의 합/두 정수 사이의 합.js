function solution(a, b) {
    var answer = 0;
    let sum = 0;

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
    
    return answer;
}