function solution(n){
    let sqrtNum = Math.sqrt(n); //11
    if(Number.isInteger(sqrtNum)){
        sqrtNum += 1; //12
        newNum = sqrtNum**2;
        return newNum;
    }else return -1; //소수점 판별
    
}