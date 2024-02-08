function solution(array, commands) {
    var answer = [];
    
    
    for(let i = 0; i<commands.length; i++){
        const newArray = array.slice(commands[i][0]-1, commands[i][1])
        newArray.sort((a, b) => a - b);
        const num = newArray[commands[i][2]-1]
        answer.push(num)
    }
    
    return answer;
}