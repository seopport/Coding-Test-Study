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
