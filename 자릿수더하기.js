//주어진 숫자의 자릿수를 모두 더하기
n = 12345;

function solution(n)
{
    var answer = 0;
    n = String(n) //문자열로 변환해서 길이 체크
    for(let i = 0; i<n.length; i++){
        answer += Number(n.substr(i,1)) //다시 숫자로 변환하여 더하기
    }

    return answer;
}

console.log(solution(n));