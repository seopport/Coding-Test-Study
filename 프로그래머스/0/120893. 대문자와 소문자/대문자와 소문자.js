function solution(my_string) {
    var answer = '';
    [...my_string].map((item, index) => {
        item === item.toLowerCase() ? answer += item.toUpperCase() : answer+= item.toLowerCase();
    })
    return answer;
}