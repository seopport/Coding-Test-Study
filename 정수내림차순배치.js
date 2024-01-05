/* 함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다. */

function solution(n) {
    var answer = 0;
    let list_n = [];
    
    //n을 문자열로 변환
    n += ""
    
    // split해서 배열에 넣기
    list_n = n.split('');
    //console.log(list_n)
    
    // 내림차순 sort
    list_n.sort((a, b) => (b- a))
    
    //다시 숫자로 변환
    n = list_n.join('');
    answer = n*1; //Number(n)
    
    return answer;
}

//숫자로 해보기
