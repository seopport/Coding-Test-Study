//주어진 숫자가 소수인지 아닌지 판별하는 함수를 작성하세요.
// 소수 = 양의 약수가 1과 자신뿐인, 1보다 큰 자연수

num = 13

function isPrimeNum (num) {
    if (num <= 1)  //숫자가 1이하인 경우 false 리턴 (소수는 1보다 큰수)
    return false; 
    for(let i = 2; i<num; i++) { // 자기 자신보다 작은 모든 수로 나누어 본다. 
        if(num % i === 0) { //나누어지면? = 소수 아님 false리턴
        return false;
    }
    }return true;
}

console.log(isPrimeNum(num))

