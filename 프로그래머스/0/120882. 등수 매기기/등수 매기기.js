function solution(score) {
    var answer = [];

    const avgScores = score.map((score) => score.reduce((acc, cur) => acc + cur) / 2).sort((a, b) => b - a);
    
    for(let i = 0; i<score.length; i++){
        answer.push(avgScores.indexOf(score[i].reduce((acc, cur) => acc + cur)/2) + 1)
    }
    
    return answer;
}