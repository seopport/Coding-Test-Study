function solution(array, height) {
    var answer = 0;
    
    
    array.map((item)=>{
        item > height ? ++answer : answer;
    })
    
    return answer;
}