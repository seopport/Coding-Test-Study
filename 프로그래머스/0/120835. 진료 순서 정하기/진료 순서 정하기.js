function solution(emergency) {
    let answer = [];
    const sorted = [...emergency].sort((a, b) => b - a);
    emergency.forEach((item) => answer.push(sorted.indexOf(item) + 1));
    return answer;
}