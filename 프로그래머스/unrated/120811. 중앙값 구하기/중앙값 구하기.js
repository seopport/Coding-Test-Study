function solution(array) {
    var answer = 0;
    
    avg = Math.floor(array.length / 2);
    answer = array.sort((a, b) => a - b)[avg]
    
    return answer;
}