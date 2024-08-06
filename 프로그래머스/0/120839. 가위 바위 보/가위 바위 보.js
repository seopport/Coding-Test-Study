function solution(rsp) {
    // 2가위 0바위 5보
    var answer = '';
    [...rsp].map((item) => item === "2" ? answer += "0" : item === "0" ? answer += "5" : answer += "2");
    return answer;
                 
}