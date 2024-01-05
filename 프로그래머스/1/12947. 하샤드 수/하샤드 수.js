function solution(x) {
    var sum = 0;  // 자릿수의 합을 저장할 변수
    var sum_x = x;  // 반복문에서 각 자릿수를 추출하기 위한 임시 변수
    
    var str_x = x + "";  // 길이를 확인하기 위해 입력값을 문자열로 변환

    // 각 자릿수의 합을 계산하는 반복문
    for (let i = 0; i < str_x.length; i++) {
        // 10으로 나눠서 각각 자릿수를 더해 sum에 저장
        sum += sum_x % 10; //10으로 나눈 나머지 (마지막 자릿수)
        sum_x = Math.floor(sum_x / 10); //10으로 나눈 몫 (마지막 자릿수 삭제)
    }

    // x가 각 자릿수의 합으로 나누어 떨어지는지 확인하여 결과 반환
    if (x % sum === 0) {
        return true;
    } else {
        return false;
    }
}

//그냥 형변환 방식이 나한테 이해는 더 쉬운것 같다..ㅠ