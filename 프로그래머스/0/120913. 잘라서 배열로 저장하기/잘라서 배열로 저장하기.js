function solution(my_str, n) {
    var answer = [];
    let strArray = [...my_str]
    
    for(let i = 0; i < my_str.length/n; i++){
        const a = strArray.splice(0, n).join('');
        answer.push(a)
    }
    
    return answer;
}