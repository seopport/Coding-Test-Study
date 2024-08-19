function solution(balls, share) {
    // 5c3 = 5*4 / 2*1 = 10
    if(balls === share === 1) return 1;
    const 차 = (balls - share);
    let 분모 = 1;
    let 분자 = 1;
    
    for(let i = 차; i > 0; i--){
        분모 *= i 
    }
    
    for(let i = 0; i<차; i++){
        분자 *= balls - i
    }
    
    return parseInt(분자/분모);
}