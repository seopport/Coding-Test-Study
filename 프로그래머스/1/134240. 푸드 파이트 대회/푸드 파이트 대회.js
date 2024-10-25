function solution(food) {
    let answer = [];

    for(let i = 0; i<food.length; i++){
        // if 3이면) Math.floor(3/2)*2 한만큼 splice로 배열 중간에 요소 추가
        for(let j = 0; j < Math.floor(food[i]/2) * 2; j++)
            answer.splice(answer.length/2, 0, i)
    }
    
    answer.splice(answer.length/2, 0, 0)
       
    return answer.join('');
}
