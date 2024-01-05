// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(s) {
    var answer = 0;
    
    //answer = s * 1; //암시적 형변환
    answer = Number(s); //명시적 형변환
    
    return answer;
}