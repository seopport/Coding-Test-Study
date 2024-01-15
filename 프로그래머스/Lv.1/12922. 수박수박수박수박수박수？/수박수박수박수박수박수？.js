function solution(n) {
    var answer = '';
    const watermelon = "수박"
    
    n % 2 === 0 ? answer = watermelon.repeat(n/2) : answer = watermelon.repeat(Math.floor(n/2)) + "수";

    return answer;
}