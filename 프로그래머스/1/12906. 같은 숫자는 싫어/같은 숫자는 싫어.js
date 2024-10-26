function solution(arr)
{
    var answer = [];
    
    
    for(let i = 0; i < arr.length; i++){
        if(!answer.includes(arr[i]) || arr[i] !== arr[i-1]){
            answer.push(arr[i])
        }
    }
    
    return answer;
}