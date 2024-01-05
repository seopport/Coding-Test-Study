/* 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요. */
//입출력 예#1) 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

//핵심: Math.sqrt() 제곱근 반환
// Number.isInteger() 정수인지 판별
// Math.pow(num, n) num을 n제곱한 값 반환

function solution(n){
    let sqrtNum = Math.sqrt(n); //11
    if(Number.isInteger(sqrtNum)){
        sqrtNum += 1; //12
        newNum = sqrtNum**2;
        return newNum;
    }else return -1; //소수점 판별
    
}

console.log(solution(3));