function solution(strings, n) {
    var answer = [];
    let sortStr = [];

    
    for(let i = 0; i<strings.length; i++){
        let sortS = strings[i][n]
        sortStr.push(sortS + strings[i])
    }     
    sortStr = sortStr.sort();
    
    for(let i = 0; i<sortStr.length; i++){
        sortStr[i] = sortStr[i].slice(1)
    }
    answer = sortStr;
    
    return answer;
}